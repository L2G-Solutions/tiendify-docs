# Store API

The Store API describes the services your customers will be interacting with. So, these are the endpoints you will integrate in your custom frontend website.

## Getting Started

After you created your Tiendify account, you will be provisioned with a dedicated API server.

Go to your [Dashboard > API Integration](https://tiendify.vercel.app/dashboard/api-integration) page. There, you will see the access URL for your API.

You can check the availability of your Shop API by calling the next endpoint:

```bash title="bash"
curl <your-API-URL>/health
```

Once you got a successful response from the server, you can start to use the services.
