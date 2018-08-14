---
layout: post
current: post
cover: assets/images/cover/laravel-sync.png
navigation: true
title: Laravel 5.6 función Sync para una relación Has Many
description: Un método simple para sincronizar una relación Has Many utilizando Collections en Laravel.
date: 2018-08-08
tags: [Computer Science, Laravel]
class: post-template
subclass: 'post'
author: eleazar
---

Laravel tiene un método de sincronización para crear asociaciones con una relación de muchos a muchos. El método de sincronización acepta un arreglo de IDs para colocarlos en la tabla intermedia. Cualquier ID que no esté en el arreglo se eliminará de la tabla intermedia.

Entonces, después de completar la operación anterior, solo los IDs del arreglo existirán en la tabla intermedia. Esto es excelente y si conocemos bien las relaciones de [Eloquent](https://laravel.com/docs/5.6/eloquent-relationships), se esperaría tener una funcionalidad similar para una relación `hasMany`.

[Amith Gotamey](https://medium.com/@amithgotamey/laravel-5-2-sync-method-for-has-many-relationship-3e279d6dd07d) comparte un método simple para hacerlo utilizando simplemente `Collection`. Para ilustrar esto, supongamos que tenemos un modelo `User` con una relación HasMany `Contacts`.

```php
/**
 * User Has Many Contacts
 *
 * @return hasMany
 */
public function contacts()
{
    return $this->hasMany(Contact::class);
}
```

Ahora veamos cómo se vería el método de sincronización.


```php
/**
 * Sync contacts
 *
 * @param array $contacts
 */
public function syncContacts(array $contact_items)
{
    $children = $this->contacts;
    $contact_items = collect($contact_items);

    $deleted_ids = $children->filter(function ($child) use ($contact_items) {
        return empty($contact_items->where('id', $child->id)->first());
    })->map(function ($child) {
        $id = $child->id;
        $child->delete();
        return $id;
    });

    /**
     * Añadí esta sección por si es necesario actualizar
     * los contactos que ya se encuentran relacionados.
     */
    $updates = $contact_items->filter(function ($contact) {
        return isset($contact['id']);
    })->map(function ($contact) {
        $this->contacts->map(function ($c) use ($contact) {
            $c->updateOrCreate([
                'id' => $contact['id']
            ],[
                'type' => $contact['type'],
                'value' => $contact['value'],
            ]);
        });
    });

    $attachments = $contact_items->filter(function ($contact) {
        return ! isset($contact['id']);
    })->map(function ($contact) use ($deleted_ids) {
        $contact['id'] = $deleted_ids->pop();
        return $contact;
    })->toArray();

    $this->contacts()->createMany($attachments);
}
```

Hope this helps!
