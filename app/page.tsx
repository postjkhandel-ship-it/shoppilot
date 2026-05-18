openapi: 3.0.0
info:
  title: Vipps MobilePay Management API
  version: 2.0.9
  description: >-
    The Management API enables partners and merchants to manage their sales
    units and get information

    about partners and product orders.

    See the [API Guide](/docs/APIs/management-api) for more details.
  contact:
    name: Vipps MobilePay AS
    url: https://developer.vippsmobilepay.com/
servers:
  - url: https://api.vipps.no
    description: >-
      Production environment (uses the production API keys, the official app and
      live data)
tags:
  - name: Merchants
    description: >-
      Functionality for managing merchants.

      Merchants can do this on the [business
      portal](https://portal.vippsmobilepay.com).
  - name: Sales units
    description: >-
      Functionality for managing sales units.

      Merchants can do this on the [business
      portal](https://portal.vippsmobilepay.com).
  - name: Product orders
    description: >-
      Functionality for managing product orders.

      Merchants can do this on the [business
      portal](https://portal.vippsmobilepay.com).
  - name: Partners
    description: Functionality relating to [Partners](/docs/partner/).
security:
  - Classic-Authorization: []
    Ocp-Apim-Subscription-Key: []
  - Management-Authorization: []
paths:
  /management/v1/partners/price-packages:
    get:
      parameters:
        - $ref: '#/components/parameters/Vipps-System-Name'
        - $ref: '#/components/parameters/Vipps-System-Version'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Name'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Version'
      tags:
        - Partners
      summary: Get price packages for a partner
      description: |-
        The price packages can have different names and percentages.
        Each price packages has a unique ID: `pricePackageId`.
        This endpoint gives partners an overview of their price packages.
        The `pricePackageId` is also used for the prefill endpoint:
        `POST:/product-orders`.
      operationId: getPartnerPricePackages
      responses:
        '200':
          description: OK
          content:
            application/json;charset=UTF-8:
              schema:
                $ref: '#/components/schemas/GetPartnerPricePackagesResponse'
        default:
          description: Default problem response
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
  /management/v1/product-orders/{productOrderId}:
    parameters:
      - $ref: '#/components/parameters/Vipps-System-Name'
      - $ref: '#/components/parameters/Vipps-System-Version'
      - $ref: '#/components/parameters/Vipps-System-Plugin-Name'
      - $ref: '#/components/parameters/Vipps-System-Plugin-Version'
      - name: productOrderId
        in: path
        description: The ID of the prefilled product order
        required: true
        schema:
          type: string
          format: uuid
          example: 8a11afb7-c223-48ed-8ca6-4722b97261aa
    delete:
      tags:
        - Product orders
      summary: Delete a prefilled product order
      operationId: deleteProductOrder
      description: Delete a product order that has not been submitted by the merchant.
      responses:
        '200':
          description: OK
        '400':
          description: Bad Request
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        '401':
          description: Unauthorized
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        '403':
          description: Forbidden
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        '404':
          description: Not Found
          content:
            application/json;charset=UTF-8:
              schema:
                $ref: '#/components/schemas/Problem'
        '500':
          description: Server Error
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        default:
          description: Default problem response
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
  /management/v1/product-orders:
    post:
      summary: Prefill a product order on behalf of a merchant
      operationId: orderProduct
      description: >
        Submit data that prefills the order form on the [business
        portal](https://portal.vippsmobilepay.com),

        so the merchant can review the information and submit the product order.


        Please note that `website` is required for the `PAYMENT_INTEGRATION`
        product type.

        Partners can still submit the product orders without it, but the
        merchant will have to fill

        in compliance data and website information manually in the business
        portal product order form and submit,

        and this is a common source of problems.


        We have made as many of the fields as possible optional, but please

        try to send as much as you can, to make it easy for the merchant and

        make the processing as fast as possible.


        **IMPORTANT:** Please provide all the necessary details, so it will not
        be necessary for us

        to request more details. This is the most common reason for delays. See:

        [Typical reasons for
        delays](/docs/partner/merchant-signup/#typical-reasons-for-delays).
      tags:
        - Product orders
      parameters:
        - $ref: '#/components/parameters/Vipps-System-Name'
        - $ref: '#/components/parameters/Vipps-System-Version'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Name'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Version'
        - $ref: '#/components/parameters/Idempotency-Key'
      requestBody:
        description: Product order for a merchant request body
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ProductOrderRequest'
      responses:
        '201':
          description: Created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ProductOrderResponse'
        default:
          description: Default problem response
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
  /management/v2/product-orders:
    get:
      tags:
        - Product orders
      summary: Get a list of product orders
      operationId: getProductOrders
      description: >
        Information about product orders:

        * Product orders made with `POST:/management/v1/product-orders`.

        * Product orders made with _Product order templates_ (the links we
        create for you).

        * Product orders made by a merchant on the [business
        portal](http://portal.vippsmobilepay.com) without prefill or template.
      responses:
        '200':
          description: OK
          content:
            application/json;charset=UTF-8:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/ProductOrderDetailsResponseV2'
        '500':
          description: Server Error
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
  /management/v2/product-orders/{productOrderId}/details:
    parameters:
      - $ref: '#/components/parameters/Vipps-System-Name'
      - $ref: '#/components/parameters/Vipps-System-Version'
      - $ref: '#/components/parameters/Vipps-System-Plugin-Name'
      - $ref: '#/components/parameters/Vipps-System-Plugin-Version'
      - name: productOrderId
        in: path
        description: The ID of the product order
        required: true
        schema:
          type: string
          format: uuid
          example: 8a11afb7-c223-48ed-8ca6-4722b97261aa
    get:
      tags:
        - Product orders
      summary: Get information about a product order
      operationId: getProductOrderDetails
      description: |-
        Status: Available (very, very soon).
        Information about a product order
      responses:
        '200':
          description: OK
          content:
            application/json;charset=UTF-8:
              schema:
                $ref: '#/components/schemas/ProductOrderDetailsResponseV2'
        '400':
          description: Bad Request
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        '401':
          description: Unauthorized
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        '403':
          description: Forbidden
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        '404':
          description: Not Found
          content:
            application/json;charset=UTF-8:
              schema:
                $ref: '#/components/schemas/Problem'
        '500':
          description: Server Error
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        default:
          description: Default problem response
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
  /management/v1/merchants/{scheme}/{id}:
    get:
      tags:
        - Merchants
      summary: Get a merchant by business identifier
      description: >-
        Get basic information about a merchant.

        **Please note:** There are strict rules for what information Vipps
        MobilePay is allowed to share.
      operationId: getMerchantByBusinessIdentifier
      parameters:
        - $ref: '#/components/parameters/Vipps-System-Name'
        - $ref: '#/components/parameters/Vipps-System-Version'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Name'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Version'
        - $ref: '#/components/parameters/scheme'
        - $ref: '#/components/parameters/id'
      responses:
        '200':
          description: OK
          content:
            application/json;charset=UTF-8:
              schema:
                $ref: '#/components/schemas/GetMerchantResponse'
        default:
          description: Default problem response
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
  /management/v1/merchants/{scheme}/{id}/sales-units:
    get:
      tags:
        - Merchants
      summary: Get sales units for a merchant by business identifier
      description: >-
        Get a list of sales units (MSNs) for the merchant.

        When used by a partner: Only returns sales units connected to the
        partner.
      operationId: getSalesUnitsByBusinessIdentifier
      parameters:
        - $ref: '#/components/parameters/Vipps-System-Name'
        - $ref: '#/components/parameters/Vipps-System-Version'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Name'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Version'
        - $ref: '#/components/parameters/scheme'
        - $ref: '#/components/parameters/id'
      responses:
        '200':
          description: OK
          content:
            application/json;charset=UTF-8:
              schema:
                $ref: '#/components/schemas/getMsnResponse'
        default:
          description: Default problem response
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
  /management/v1/sales-units:
    get:
      tags:
        - Sales units
      summary: Get a list of sales units that a merchant or partner can access
      description: >-
        For partners using

        [partner keys](/docs/partner/partner-keys):

        Get a (long) list of all sales units registered with the partner making
        the API call.
      operationId: getAllSalesUnits
      parameters:
        - $ref: '#/components/parameters/Vipps-System-Name'
        - $ref: '#/components/parameters/Vipps-System-Version'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Name'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Version'
      responses:
        '200':
          description: OK
          content:
            application/json;charset=UTF-8:
              schema:
                $ref: '#/components/schemas/getMsnResponse'
        default:
          description: Default problem response
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
  /management/v1/sales-units/{msn}:
    get:
      tags:
        - Sales units
      summary: Get sales unit details based on MSN
      description: |-
        Eliminates the need to contact the merchant or Vipps MobilePay
        to get information about the sales units.
      operationId: getMsn
      parameters:
        - $ref: '#/components/parameters/Vipps-System-Name'
        - $ref: '#/components/parameters/Vipps-System-Version'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Name'
        - $ref: '#/components/parameters/Vipps-System-Plugin-Version'
        - $ref: '#/components/parameters/msn'
      responses:
        '200':
          description: OK
          content:
            application/json;charset=UTF-8:
              schema:
                $ref: '#/components/schemas/SalesUnit'
        default:
          description: Default problem response
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
components:
  securitySchemes:
    Classic-Authorization:
      type: http
      scheme: bearer
      description: >-
        The access token is a base64-encoded string that is required for all API
        calls.

        It is a JWT (JSON Web Token).

        The access token is fetched from the

        [`POST:/accesstoken/get`](/api/access-token#tag/Authorization-Service/operation/fetchAuthorizationTokenUsingPost)

        endpoint.

        It is valid for 1 hour in the test environment and 24 hours in the
        production environment.
    Ocp-Apim-Subscription-Key:
      type: apiKey
      in: header
      name: Ocp-Apim-Subscription-Key
      description: >-
        This key is only required when using `Classic-Authorization`. The
        subscription key for your API product is available on the [business
        portal](http://portal.vippsmobilepay.com), under the 'Developer'
        section.

        Keep it secret. Usually looks similar to this:
        0f14ebcab0ec4b29ae0cb90d91b4a84a
    Management-Authorization:
      type: http
      scheme: bearer
      description: >-
        The access token is a base64-encoded string that is required for all API
        calls.

        It is a JWT (JSON Web Token).

        The access token is fetched from the

        [`POST:/miami/v1/token`](/api/access-token/#tag/Token-endpoint/operation/fetchToken)

        endpoint.

        It is valid for 15 minutes.
  schemas:
    ExtraDetails:
      type: object
      required:
        - key
        - value
      properties:
        key:
          type: string
          example: CustomErrorCode
          description: Key
        value:
          type: string
          example: '9000'
          description: Value
    ProductType:
      type: string
      enum:
        - PAYMENT_INTEGRATION
        - CASHIER
        - CHECKOUT
        - LOGIN
        - DONATIONS
      example: PAYMENT_INTEGRATION
      description: The type of product ordered for the merchant.
    ProductOrderRequest:
      title: Product Order Request for a merchant
      type: object
      required:
        - businessIdentifier
        - productType
      properties:
        businessIdentifier:
          $ref: '#/components/schemas/businessIdentifier'
        salesUnitName:
          nullable: true
          type: string
          pattern: ^[\p{L}\p{M}\d\\(\)-_\+\s\.`]+$
          minLength: 1
          maxLength: 40
          example: ACME Fantastic Fitness
          description: >-
            The name of the point of sale that will be shown to the users in

            the Vipps app and on the Vipps landing page.

            The sales unit name can be edited later on [business
            portal](http://portal.vippsmobilepay.com).
        salesUnitLogo:
          $ref: '#/components/schemas/SalesUnitLogo'
        settlementBankAccount:
          $ref: '#/components/schemas/BankAccount'
        pricePackageId:
          type: string
          format: uuid
          example: 8a11afb7-c223-48ed-8ca6-4722b97261aa
          nullable: true
          description: >-
            This is the ID for one of the price packages that are available for
            the partner to use.

            The partner's price packages are retrieved with
            `GET:/management/v1/partners/price-packages`.

            Only applicable when the `productType` allows for different prices,
            such as:

            `PAYMENT_INTEGRATION`, `CASHIER` and `CHECKOUT`.

            If this field is not provided, the merchant must select the price
            manually.

            Partners may have, and specify, price packages that are not shown to
            merchants that order manually.

            If this field is provided, the merchant will not be able to change
            it in the form.
        productType:
          type: string
          enum:
            - PAYMENT_INTEGRATION
            - CASHIER
            - CHECKOUT
            - LOGIN
            - DONATIONS
          example: PAYMENT_INTEGRATION
          description: The type of product ordered for the merchant.
        productUseCase:
          $ref: '#/components/schemas/ProductUseCase'
        annualTurnover:
          type: integer
          nullable: true
          minimum: 0
          maximum: 999999999
          format: int64
          description: >-
            Annual turnover for the merchant in their local currency, without
            minor currency units.
          example: 100000
        annualTurnoverPercentage:
          type: string
          nullable: true
          pattern: ^(10|[1-9])0$
          description: >-
            The percentage of the merchant's annual turnover that is expected to
            be processed through Vipps MobilePay.
          example: '10'
        intendedPurpose:
          type: string
          description: >-
            Description (explanation) of the product or products that will be
            sold.

            Include all information relevant to processing the product order, so
            the

            processing of the application can be as efficient as possible.

            This can include hints such as specifying "POS integration in
            physical store"

            to indicate that the sales unit needs `skipLandingPage` activated.
          example: |-
            Gym membership for accessing the gym's facilities.
            Guest will be not physically present when buying the subscription,
            as that is done on the gym's website.
          nullable: true
        app:
          nullable: true
          type: object
          required:
            - appName
          description: 'Properties for use with ''productUseCase: App'''
          properties:
            appName:
              type: string
              description: The name of the app as it's listed in App Store or Play Store.
        website:
          nullable: true
          type: object
          required:
            - url
            - termsUrl
          properties:
            url:
              type: string
              format: URL
              description: >-
                For 'WebsiteWithTest' or 'Website'. The URL to the merchant's
                website. Must be a valid URL with HTTPS scheme
              example: https://example.com
            termsUrl:
              type: string
              format: URL
              description: >-
                The URL that points to the merchants sales terms. Must be a
                valid URL with HTTPS scheme
              example: https://example.com/terms-and-conditions
            testWebsiteUrl:
              nullable: true
              type: string
              format: URL
              description: >-
                For 'WebsiteWithTest'. The URL to the merchants test website.
                Must be a valid URL with HTTPS scheme
              example: 'https://example.com/test '
            testWebsiteUsername:
              nullable: true
              type: string
              description: For 'WebsiteWithTest'. Username to log in on the test website
              example: test-user
            testWebsitePassword:
              nullable: true
              type: string
              description: For 'WebsiteWithTest'. Password to log in on the test website
              example: test-password
        hasRecurring:
          type: boolean
          description: >-
            Does the merchant offer products or services with recurring
            payments, such as subscriptions or memberships?

            If this is set to `true`, the merchant will get access to the
            Recurring API, which

            requires additional compliance checks and approval.
          default: false
          example: false
          nullable: true
        merchantCategoryCode:
          type: string
          format: ^[0-9]{4}$
          nullable: true
          example: 5942
          description: >-
            The [merchant category code
            (MCC)](https://en.wikipedia.org/wiki/Merchant_category_code)

            is a four-digit number used to classify the merchant by the type of
            goods or services it provides.

            The MCC is used by Vipps MobilePay to determine the risk level of
            the merchant.

            Our product order form contains a user-friendly MCC selector, which
            contains a subset of all MCCs.

            If the MCC specified with the API matches one of the user-selectable
            ones, that MCC will be pre-selected in the form.

            If the MCC does not match, or no MCC is specified, no MCC will be
            pre-selected.
    ProductOrderResponse:
      title: Product Order response
      type: object
      required:
        - prefilledOrderId
        - prefillUrl
      properties:
        prefilledOrderId:
          type: string
          format: uuid
          description: >-
            A UUID reference that identifies the product order request submitted
            by the partner.
          example: 81b83246-5c19-7b94-875b-ea6d1114f099
        prefillUrl:
          type: string
          format: uri
          description: >-
            A URL for the merchant to the prefilled product order to complete
            the signup.

            The URL expires after 14 days due to regulatory requirements.

            Accessing an expired `prefillUrl` will result in an error.
          example: >-
            https://portal.vippsmobilepay.com/register/prefilled/81b83246-5c19-7b94-875b-ea6d1114f099
    ProductOrderDetailsResponseV2:
      title: Product order details response
      description: >-
        **Please note:** There are strict rules for what information Vipps
        MobilePay is allowed to share.
      type: object
      required:
        - status
        - businessIdentifier
      properties:
        productOrderType:
          description: >-
            The type of this product order:

            * `PREFILL` - The product order was made with prefill.

            * `TEMPLATE` - The product order was made with a template.

            * `MANUAL` - The product order was made manually on the business
            portal.
          enum:
            - PREFILL
            - TEMPLATE
            - MANUAL
        productOrderId:
          type: string
          format: uuid
          description: A UUID reference that identifies the product order request.
          example: 81b83246-5c19-7b94-875b-ea6d1114f099
        productType:
          $ref: '#/components/schemas/ProductType'
        status:
          type: string
          description: >-
            The status of the product order.

            Some of the states are only relevant for orders prefilled by a
            partner.

            POs made with templates, or manually on the business portal, only
            contain a subset of statuses:

            * RECEIVED

            * COMPLETED

            * REJECTED
          enum:
            - RECEIVED
            - MERCHANT_VIEWED
            - ORDER_SUBMITTED
            - EXPIRED
            - COMPLETED
            - REJECTED
          example: COMPLETED
        businessIdentifier:
          $ref: '#/components/schemas/businessIdentifier'
        productOrderUrl:
          type: string
          format: uri
          description: >-
            Only relevant for orders prefilled by a partner

            A URL to the merchants prefilled product order where they can submit
            the order.
          nullable: true
          example: >-
            https://portal.vippsmobilepay.com/register/prefilled/81b83246-5c19-7b94-875b-ea6d1114f099
        salesUnit:
          $ref: '#/components/schemas/ProductOrderSalesUnit'
    ProductOrderSalesUnit:
      title: >
        Information about the sales unit that this product order resulted in.

        Empty until the product order has been successfully processed (status:
        `COMPLETED`), and the sales unit has been created.
      type: object
      nullable: true
      required:
        - msn
        - name
      properties:
        msn:
          $ref: '#/components/schemas/MSN'
        name:
          type: string
          description: The name of the sales unit.
          example: ACME Fantastic Fitness
    SalesUnit:
      description: Details of a sales unit. More properties may be added at a later date.
      required:
        - msn
        - name
        - businessIdentifier
        - configuration
      type: object
      properties:
        msn:
          $ref: '#/components/schemas/MSN'
        name:
          type: string
          description: The sales unit's name
          example: ACME Fantastic Fitness
          x-order: 5
        businessIdentifier:
          $ref: '#/components/schemas/businessIdentifier'
        configuration:
          type: object
          description: >-
            Additional details that might or might not be available.

            In the case that any of these are not provided, it doesn't mean that
            those details don't apply.
          properties:
            paymentAllowed:
              type: boolean
              description: >-
                This is `true` if the sales unit is allowed to make payments,
                and has been through the legally required compliance checks.

                Sales units that are only allowed to use the Login API (and do
                not make payments) will have `false` here.

                There _may_ (now or in the future) be special cases where
                `false` does not mean that it's a Login sales unit, but this is
                rare.
              example: false
            captureType:
              type: string
              description: >-
                The capture type of the sales unit.

                We strongly recommend `ReserveCapture`, and this is the only
                method supported by the ePayment API.

                See the API documentation:
                https://developer.vippsmobilepay.com/docs/knowledge-base/reserve-and-capture/
              enum:
                - ReserveCapture
                - DirectCapture
                - NotApplicable
              default: ReserveCapture
              example: ReserveCapture
            skipLandingPageAllowed:
              type: boolean
              description: >-
                This is `true` if the merchant has access to sending
                `skipLandingPage` parameter for eCom API requests.

                See the [landing page](/docs/knowledge-base/landing-page/).
              example: false
            recurringAllowed:
              type: boolean
              description: >-
                This is `true` is the sales unit has access to the Recurring
                API.

                Vipps is required to perform some extra

                compliance checks before activating the Recurring API.

                See:
                https://developer.vippsmobilepay.com/docs/APIs/recurring-api
              example: false
            partialCaptureAllowed:
              type: boolean
              description: >-
                This is `true` if the sales unit has access to multiple partial
                captures of a payment.

                See [partial
                capture](/docs/APIs/epayment-api/api-guide/operations/capture/#partial-capture).

                Relevant for sales units in Denmark and Finland.

                All Norwegian sales units have access to partial captures by
                default.
              example: true
            lateCaptureAllowed:
              type: boolean
              description: >-
                This is `true` if the sales unit has access to capturing a
                payment later than the default 14 days.

                See [late
                capture](/docs/knowledge-base/reserve-and-capture/#late-capture-for-mobilepay-sales-units).

                Relevant for sales units in Denmark and Finland.

                All Norwegian sales units can capture up to 180 days.
              example: false
            landingPagePhoneNumberLocked:
              type: boolean
              description: >-
                This is `true` if editing the phone number on the landing page
                is locked for the sales unit.

                See [prevent user editing phone
                number](/docs/knowledge-base/landing-page/#is-it-possible-to-prevent-the-user-from-editing-the-phone-number).
              example: false
            longLivingPaymentAllowed:
              type: boolean
              description: >-
                This is `true` if the sales unit has access to using Long-living
                payment requests.

                See [long-living payment
                requests](/docs/APIs/epayment-api/api-guide/features/long-living-payments/).
              example: false
            creditCardPaymentAllowed:
              type: boolean
              description: >-
                This is `true` if the sales unit accepts paying with credit
                card. Should be `true` for most sales units.

                See [Restricting credit card
                payments](/docs/knowledge-base/payments/#restricting-credit-card-payments).
              example: true
    GetPartnerPricePackagesResponse:
      description: List of the partner's price packages
      type: array
      items:
        $ref: '#/components/schemas/PricePackage'
    Merchant:
      description: A merchant
      required:
        - businessIdentifier
        - name
        - status
        - createdAt
        - updatedAt
        - countryCode
      type: object
      properties:
        businessIdentifier:
          $ref: '#/components/schemas/businessIdentifier'
        name:
          type: string
          description: The name of the merchant
          minLength: 1
          maxLength: 50
          example: ACME Fantastic Fitness
        status:
          type: string
          description: Status of the merchant.
          enum:
            - ACTIVE
            - DEACTIVATED
          example: ACTIVE
        createdAt:
          type: string
          description: The timestamp (ISO-8601) for when the merchant was created.
          format: date-time
          example: '2023-31-12T06:45:25.921251Z'
        updatedAt:
          type: string
          description: >-
            The timestamp (ISO-8601) for when the merchant was updated (if it
            has been updated).
          format: date-time
          example: '2023-31-12T06:45:25.921251Z'
        countryCode:
          type: string
          description: >-
            The merchant's country code, ISO 3166-2 (two capital letters), for
            example `NO`, `DK`, `FI`, etc.
          pattern: ^[A-Z]{2}$
          example: 'NO'
        businessAddress:
          $ref: '#/components/schemas/Address'
        businessPostAddress:
          $ref: '#/components/schemas/Address'
    BankAccount:
      title: Bank account for the given entity.
      type: object
      nullable: true
      required:
        - scheme
        - id
      properties:
        scheme:
          type: string
          description: >
            The type of identifier for the bank account, on the format:
            `BBAN:countryCode`,

            for example `BBAN:NO`, `BBAN:DK`, `BBAN:FI`, etc.

            Only regular bank accounts (`BBAN`) are supported, not IBAN.
          minLength: 5
          maxLength: 20
          example: BBAN:NO
        id:
          type: string
          description: >
            The account number (or ID).

            In Norway and Finland, this is the bank account number.

            In Denmark, this is the the bank code or registration number (A) +
            account number (Y) on the format `AAAA YYYY YYYY YY` (without
            spaces).
          pattern: ^\d{9,34}$
          example: '86011117947'
    Address:
      title: Address
      type: object
      nullable: true
      required:
        - lines
      properties:
        lines:
          type: array
          description: >-
            Array of addressLines, for example street name, number, etc. May be
            empty if there is no street address.
          items:
            type: string
            maxLength: 30
            example: Robert Levins gate 5
        postCode:
          type: string
          nullable: true
          description: Postcode of the address in local country format.
          maxLength: 20
          example: '0154'
        city:
          type: string
          nullable: true
          description: The city.
          maxLength: 30
          example: Oslo
        countryCode:
          type: string
          nullable: true
          description: |
            Country code according to ISO 3166-2 (two capital letters).
            For example `NO`, `DK`, `FI`, etc.
          pattern: ^[A-Z]{2}$
          maxLength: 2
          example: 'NO'
    GetMerchantResponse:
      allOf:
        - $ref: '#/components/schemas/Merchant'
      description: Response of a successful get merchant(s) operation
      type: object
    getMsnResponse:
      description: >-
        List of MSNs (merchant serial numbers), that the calling partner has
        access to.
      type: array
      items:
        $ref: '#/components/schemas/MsnInfo'
    MSN:
      description: 'MSN (merchant serial number): The identifier of the sales unit.'
      type: string
      minLength: 4
      maxLength: 10
      pattern: ^\d{4,10}$
      example: '12345678'
    SalesUnitName:
      description: The name of the sales unit.
      type: string
      maxLength: 50
      example: ACME Fantastic Fitness
    SalesUnitLogo:
      nullable: true
      type: string
      format: byte
      example: VGhlIGltYWdlIGdvZXMgaGVyZQ==
      description: >
        Base64 encoded string of the logo of the merchant.

        The logo will be displayed in the Vipps app, both when paying and on
        receipts and also in Vipps landing page.

        The logo must be in PNG (Portable Network Graphics) format.

        Square images are recommended.

        The longest side can not be more than 1000 pixels.

        The minimum size is 100 x 100 pixels.

        Images not matching the above criteria will not be shown to the merchant
        in the business portal.

        The logo can be edited later on the business portal.
    MsnInfo:
      description: High-level details about a MSN
      type: object
      required:
        - msn
        - name
      properties:
        msn:
          $ref: '#/components/schemas/MSN'
        name:
          $ref: '#/components/schemas/SalesUnitName'
    businessIdentifier:
      type: object
      description: >-
        Business registration number of the merchant for whom the partner is
        submitting the product order.

        Format: `business:countryCode:type`, for example `business:NO:ORG`,
        `business:DK:CVR`, `business:FI:Y-tunnus`, etc.
      required:
        - scheme
        - id
      properties:
        scheme:
          type: string
          description: >-
            The type of organization identifier, typically
            `business:countryCode:type`, for example `business:NO:ORG`,
            `business:DK:CVR`, `business:FI:Y-tunnus`, etc.
          minLength: 10
          maxLength: 30
          example: business:NO:ORG
        id:
          type: string
          description: >-
            The business identifier, typically the organization number, VAT
            registration number, etc.
          pattern: ^[\d-]{4,50}$
          example: '9876543221'
    ProductUseCase:
      type: string
      nullable: true
      enum:
        - Website
        - WebsiteWithTest
        - App
        - Unknown
      example: WebsiteWithTest
      description: >-
        Where will sales take place?

        A website?

        A website that is not yet launched, so a test website must be used?

        A native app?

        Something else?

        If you are offering a Point of Sales (POS) integration, you should
        specify `Unknown`.


        For all alternatives: Make sure to provide enough details in
        `intendedPurpose`.
    PricePackage:
      required:
        - pricePackageId
        - name
        - description
      type: object
      properties:
        pricePackageId:
          type: string
          description: The unique ID for the price package in UUID format.
          format: uuid
          example: 8a11afb7-c223-48ed-8ca6-4722b97261aa
        name:
          type: string
          description: The price package's name.
          maxLength: 30
          example: POS standard
        description:
          type: string
          description: A short human-readable summary of the price.
          maxLength: 6
          example: 2.99%
        visibleInSignupForm:
          type: boolean
          description: >-
            A boolean indicating whether the price package is available for
            merchants to select in our signup forms.
          example: true
        productType:
          $ref: '#/components/schemas/ProductType'
        market:
          type: string
          description: The market the price package is valid for
          enum:
            - DK
            - 'NO'
            - FI
          example: 'NO'
        commission:
          type: string
          description: Commission for sales units ordered with this price package
          example: 30 %
          nullable: true
    Problem:
      title: Problem
      type: object
      required:
        - type
        - title
        - status
        - detail
        - instance
      properties:
        type:
          type: string
          format: uri
          example: https://example.com/problem/unauthorized
          description: A URI reference that identifies the problem type.
        title:
          type: string
          example: Not authorized to create a product order
          description: >-
            A short, human-readable summary of the problem type.  It will not
            change from occurrence to occurrence of the problem.
        status:
          type: integer
          description: The HTTP response code
          example: 401
        detail:
          type: string
          example: >-
            Not authorized to create a product order. Check whether
            Authorization token and Ocp-Apim-Subscription-Key are correct.
          description: >-
            A human-readable explanation specific to this occurrence of the
            problem.
        instance:
          type: string
          example: urn:uuid:123e4567-e89b-12d3-a456-426655440000
          description: >-
            A URI reference that identifies the specific occurrence of the
            problem
        extraDetails:
          nullable: true
          type: array
          items:
            $ref: '#/components/schemas/ExtraDetails'
  parameters:
    Vipps-System-Name:
      name: Vipps-System-Name
      in: header
      description: |-
        The name of the solution.
        One word in lowercase letters is good.
        See [HTTP headers](/docs/knowledge-base/http-headers).
      schema:
        type: string
        maxLength: 30
        example: WooCommerce
    Vipps-System-Version:
      name: Vipps-System-Version
      in: header
      description: |-
        The version number of the solution.
        See [HTTP headers](/docs/knowledge-base/http-headers).
      schema:
        type: string
        maxLength: 30
        example: 5.4.0
    Vipps-System-Plugin-Name:
      name: Vipps-System-Plugin-Name
      in: header
      description: |-
        The name of the plugin (if applicable).
        One word in lowercase letters is good.
        See [HTTP headers](/docs/knowledge-base/http-headers).
      schema:
        type: string
        maxLength: 30
        example: woocommerce-payment
    Vipps-System-Plugin-Version:
      name: Vipps-System-Plugin-Version
      in: header
      description: |-
        The version number of the plugin (if applicable).
        See [HTTP headers](/docs/knowledge-base/http-headers).
      schema:
        type: string
        maxLength: 30
        example: 1.2.1
    Idempotency-Key:
      in: header
      name: Idempotency-Key
      description: An Idempotency key must be provided to ensure idempotent requests.
      required: true
      schema:
        type: string
        maxLength: 50
        pattern: ^[a-zA-Z0-9-]{1,50}$
        example: kRk3uEeiogxLu1yGSZRlNgsIv3TuNS
    msn:
      name: msn
      in: path
      required: true
      description: 'MSN (merchant serial number): The identifier of the sales unit.'
      schema:
        $ref: '#/components/schemas/MSN'
    scheme:
      name: scheme
      in: path
      required: true
      schema:
        type: string
        description: >-
          The type of organization identifier, typically
          `business:countryCode:type`. For example `business:NO:ORG`,
          `business:DK:CVR`, `business:FI:Y-tunnus`, etc.
        example: business:NO:ORG
    id:
      name: id
      in: path
      description: >-
        The ID used for identifying a merchant. For Norwegian companies this is
        the organization number.
      required: true
      schema:
        type: string
        example: '9876543221'
