import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "store-api/reference/store",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "store-api/reference/redirect-to-keycloak-auth-public-login-get",
          label: "Redirect to Keycloak login page",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "store-api/reference/authorize-auth-public-authorize-post",
          label: "Takes the authorization code and set the access token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "store-api/reference/get-logged-user-auth-private-me-get",
          label: "Get current user information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "store-api/reference/logout-auth-private-logout-post",
          label: "Logout user",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Secret Keys",
      items: [
        {
          type: "doc",
          id: "store-api/reference/get-secret-keys-auth-private-secret-keys-get",
          label: "Get all secret keys",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "store-api/reference/create-secret-key-auth-private-secret-keys-post",
          label: "Create a new secret key",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Categories",
      items: [
        {
          type: "doc",
          id: "store-api/reference/handle-get-categories-categories-categories-get",
          label: "Handle Get Categories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-post-categories-categories-categories-post",
          label: "Handle Post Categories",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-delete-category-categories-categories-category-slug-delete",
          label: "Handle Delete Category",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Products",
      items: [
        {
          type: "doc",
          id: "store-api/reference/handle-get-products-products-get",
          label: "Handle Get Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-create-product-products-post",
          label: "Handle Create Product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-get-product-products-product-id-get",
          label: "Handle Get Product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-update-product-products-product-id-put",
          label: "Handle Update Product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-delete-product-products-product-id-delete",
          label: "Handle Delete Product",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-create-product-mediafile-products-product-id-mediafile-post",
          label: "Handle Create Product Mediafile",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-change-product-visibility-products-product-id-visibility-patch",
          label: "Handle Change Product Visibility",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Orders",
      items: [
        {
          type: "doc",
          id: "store-api/reference/handle-get-orders-orders-get",
          label: "Handle Get Orders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-get-order-orders-order-id-get",
          label: "Handle Get Order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "store-api/reference/handle-cancel-order-orders-order-id-cancel-patch",
          label: "Handle Cancel Order",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Customers",
      items: [
        {
          type: "doc",
          id: "store-api/reference/handle-get-customers-customers-get",
          label: "Handle Get Customers",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Other",
      items: [
        {
          type: "doc",
          id: "store-api/reference/handle-get-health-health-get",
          label: "Handle Get Health",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
