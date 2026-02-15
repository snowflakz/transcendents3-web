# EmailJS setup – send eBook thank-you email to recipient

So that each person who downloads the eBook receives the full thank-you email (with “Dear [First Name]”, the message, and the download link) at the address they entered:

1. **Sign up at [EmailJS](https://www.emailjs.com/)** and log in.

2. **Add an Email Service** (e.g. Gmail):
   - Go to **Email Services** → **Add New Service**.
   - Choose your provider (e.g. Gmail), connect the account, and note the **Service ID** (e.g. `service_xxxxx`).

3. **Create an Email Template**:
   - Go to **Email Templates** → **Create New Template**.
   - **Name:** e.g. `eBook thank-you`.
   - **To Email:** set to `{{to_email}}` (so the email goes to the person who submitted the form).
   - **Subject:** `{{subject}}` (we send “Your free eBook from Transcendents3”).
   - **Content (HTML):** set to `{{{message_html}}}` (triple braces so HTML is not escaped).  
     The app sends the full message (Dear [First Name], thank-you text, and download link) in this variable.
   - Save and note the **Template ID** (e.g. `template_xxxxx`).

4. **Get your Public Key**:
   - Go to **Account** → **API Keys** (or **General**).
   - Copy your **Public Key**.

5. **Add keys to the project**  
   In the project root, create or edit `.env` and add:

   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID_EBOOK=your_template_id
   ```

   Replace with the values from steps 2–4. Restart the dev server after changing `.env`.

After this, when someone submits the QuickBooks Guides form, the site will:

1. Notify **transcendents3@gmail.com** with subject “[First Name] has just downloaded our ebook”.
2. Send the **recipient** an email at the address they entered, with the full thank-you content and the eBook download link (via EmailJS).

If these env vars are not set, only the owner is notified; the thank-you page still shows and the backup “Download eBook” link still works.

---

### Troubleshooting

- **Recipient still doesn’t get the email**
  - Confirm `.env` is in the **project root** (same folder as `package.json`).
  - Restart the dev server after changing `.env` (`npm run dev`).
  - In the template, **To Email** must be exactly `{{to_email}}` (no spaces). If it’s a fixed address, the email will always go there instead of the recipient.
  - Set the template **Content type** to **HTML** (not plain text) so the link and formatting work.
  - Check the browser console (F12 → Console) after submit; in development, EmailJS errors are logged there.
  - Check spam/junk for the recipient.

- **Alternative without EmailJS (FormSubmit only)**  
  You can use FormSubmit’s **Auto-responder** so the submitter gets a reply. See **docs/FORMSUBMIT_EBOOK_AUTORESPONDER.md**: enable the auto-responder in the FormSubmit dashboard for transcendents3@gmail.com and paste the message body there. Then the recipient gets the email from FormSubmit instead of EmailJS.
