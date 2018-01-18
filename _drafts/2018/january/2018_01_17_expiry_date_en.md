# Verify an expiration date

Sometimes it's necessary to verify the expiration date of something, for example a token.

Next, I share the function that Laravel uses to verify if your password reset token has expired.

On the other hand, I was unaware of the existence of the `isPast` function of [Carbon](http://carbon.nesbot.com/), so which, it's necessary to reread his [documentation](http://carbon.nesbot.com/docs/).

The `tokenExpired($created_at, $token)` function can be found in the vendor folder of the `DatabaseTokenRepository` class in the namespace `Illuminate\Auth\Passwords;`. It executes the following:

```php
return Carbon::parse($createdAt)->addSeconds($this->expires)->isPast();
```

So, for example: 

```php
$created_at = DB::table('password_resets')->first()['created_at'];
// => 2018-01-08 09:59:26

// Carbon::now();
// => 2018-01-08 11:03:05

Carbon::parse($created_at)->addSeconds(config('auth.passwords.users.expire'*60))->isPast()
// => true (with an expiration date of 1 hour)
```