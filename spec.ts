
Running 1 test using 1 worker

[1A[2K[1/1] [chromium] › register.spec.ts:4:5 › Register page
[1A[2K  1) [chromium] › register.spec.ts:4:5 › Register page ─────────────────────────────────────────────

    [31mTest timeout of 40000ms exceeded.[39m

    Error: locator.click: Test timeout of 40000ms exceeded.
    Call log:
      [2m- waiting for getByLabel('I\'m not a robot')[22m


       at ..\pages\registerPage.ts:40

      38 |         await this.password.fill(password)
      39 |         // await this.captcha.click()
    > 40 |         await this.captchalabel.click()
         |                                 ^
      41 |         await this.registerbtn.click()
      42 |     }  
      43 | }

        at RegisterPage.register (C:\Users\jyothika.suresh\Documents\playwright_learnings\tryout proj\pages\registerPage.ts:40:33)
        at C:\Users\jyothika.suresh\Documents\playwright_learnings\tryout proj\tests\register.spec.ts:8:5


[1A[2K  1 failed
    [chromium] › register.spec.ts:4:5 › Register page ──────────────────────────────────────────────

  Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.
