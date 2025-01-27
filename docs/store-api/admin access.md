---
sidebar_position: 2
---

# Administrator Access

We provide services to automate processes and manage your store. Almost every thing you can do thorugh your Tiendify Dashboard, can be done using your API directly.

## Admin Authentication

Different from regular users, administrators have a different authentication flow. This is because the admin endpoints are not thought to be accessed by the browser, but by your server, or automated scripts.

To authenticate with your API as an admin, you will need to generate an API key. You can do this by going to your [Tiendify Dashboard > API Integration](https://tiendify.vercel.app/dashboard/api-integration) page.

Once you have your API key, you can use it to authenticate your requests. You should include it in the `Authorization` header of your requests as a bearer token, like this:

```http"
GET /customers/ HTTP/1.1
Host: <YOUR_API_URL>
Authorization: Bearer <YOUR_API_KEY>
```

You can find more information about the available endpoints in the [API Reference](/docs/store-api/reference).
