# FormSubmit Auto-responder for eBook Download

So that users receive the full thank-you email (with download link) at the address they entered:

1. Go to [FormSubmit](https://formsubmit.co) and use the email **transcendents3@gmail.com**.
2. Open the email FormSubmit sent to activate the address (if not already activated).
3. In FormSubmit dashboard, enable **Auto-responder** for this form.
4. Set **Subject** to: `Your free eBook from Transcendents3`
5. Set **Message** (plain text or HTML) to the following. You can use `{{ firstName }}`, `{{ lastName }}`, `{{ email }}` in the message:

```
Dear {{ firstName }},

Thank you for downloading our free eBook, "The Small Business Bookkeeping Blueprint"!

We're thrilled to help you take the first step toward mastering your business finances. This guide is packed with beginner-friendly tips on bookkeeping principles, expense tracking, and setting up simple financial systems—perfect for small business owners, freelancers, and Texas entrepreneurs like you.

Click here to download your free eBook now:
https://drive.google.com/file/d/1_I6P-y58W9qEZ2Tec2u9KJYojqqNXgWk/view?usp=sharing

Inside, you'll find actionable advice, downloadable templates, and real-world examples to save time, reduce stress, and boost your profits. Whether you're juggling receipts or tackling QuickBooks for the first time, this blueprint is your go-to resource.

Ready to take it further? Schedule a free 15-minute consultation with our experts at Transcendents3 to personalize these strategies for your business.

Visit transcendents3.com to book your slot today!

Warm regards,
The Transcendents3 Team
Email: info@transcendents3.com | Phone: +1 (540) 929-9002 | Website: transcendents3.com
```

The form on the site sends `firstName`, `lastName`, and `email` to FormSubmit, and the owner receives a notification with subject: **[FirstName] has just downloaded our ebook**.
