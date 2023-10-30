
<script>
   var edrone_app_id = 'fghjkklkjkjk';

   function edroneSetCookie(cname,
      cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays *
         24 * 60 * 60 * 1000));
      var expires = "expires=" + d
         .toUTCString();
      document.cookie = cname + "=" +
         cvalue + ";" + expires +
         ";path=/";
   }

   function edroneGetCookie(cname) {
      var name = cname + "=";
      var decodedCookie =
         decodeURIComponent(document
            .cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca
         .length; i++) {
         var c = ca[i];
         while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name
               .length, c.length);
         }
      }
      return "";
   }

   function edroneDeleteCookie(cname) {
      document.cookie = cname +
         "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
   }(function(srcjs) {
      window._edrone = window
         ._edrone || {};
      _edrone.app_id = edrone_app_id;
      _edrone.version = '1.0.0';
      _edrone.platform_version =
         '1.0.0';
      _edrone.platform = 'custom';
      var doc = document
         .createElement('script');
      doc.type = 'text/javascript';
      doc.async = true;
      doc.src = ('https:' == document
            .location.protocol ?
            'https:' : 'http:') +
         srcjs;
      var s = document
         .getElementsByTagName(
            'script')[0];
      s.parentNode.insertBefore(doc,
         s);
   })("//d3bo67muzbfgtl.cloudfront.net/edrone_2_0.js?app_id=" +
      edrone_app_id);
   window.addEventListener('load',
      function() {
         var edrone_ls_time =
            setInterval(function() {
               if (
                  typeof jQuery !==
                  'undefined' &&
                  typeof LS !==
                  'undefined') {
                  clearInterval(
                     edrone_ls_time
                     );
                  (function($,
                     root,
                     undefined
                     ) {
                     $('#login-form')
                        .submit(
                           function() {
                              localStorage
                                 .removeItem(
                                    'edrone_email'
                                    );
                              localStorage
                                 .setItem(
                                    'edrone_email',
                                    encodeURIComponent(
                                       $(
                                          this)
                                       .find(
                                          'input[name="email"]'
                                          )
                                       .val()
                                       )
                                    );
                              if (
                                 $(
                                    this)
                                 .find(
                                    'input[name="name"]'
                                    )
                                 .length
                                 ) {
                                 localStorage
                                    .removeItem(
                                       'edrone_name'
                                       );
                                 localStorage
                                    .setItem(
                                       'edrone_name',
                                       encodeURIComponent(
                                          $(
                                             this)
                                          .find(
                                             'input[name="name"]'
                                             )
                                          .val()
                                          )
                                       );
                              }
                           });
                     if ($(
                           '.customer-box .contact-data .span8 > div:first-child')
                        .length
                        ) {
                        localStorage
                           .removeItem(
                              'edrone_name'
                              );
                        localStorage
                           .setItem(
                              'edrone_name',
                              $
                              .trim(
                                 $(
                                    '.customer-box .contact-data .span8 > div:first-child')
                                 .text()
                                 )
                              );
                     }
                     if ($(
                           '.customer-box .contact-data .span8 > div:first-child + div')
                        .length
                        ) {
                        localStorage
                           .removeItem(
                              'edrone_email'
                              );
                        localStorage
                           .setItem(
                              'edrone_email',
                              $
                              .trim(
                                 $(
                                    '.customer-box .contact-data .span8 > div:first-child + div')
                                 .text()
                                 )
                              );
                     }
                     $(document)
                        .delegate(
                           '.form-step button[type="submit"]',
                           'click',
                           function() {
                              var edrone_news =
                                 $(
                                    this)
                                 .closest(
                                    'form'
                                    )
                                 .find(
                                    '#acceptedMarketing:checked'
                                    )
                                 .val();
                              var edrone_email =
                                 $(
                                    this)
                                 .closest(
                                    'form'
                                    )
                                 .find(
                                    'input[name="contact.email"]'
                                    )
                                 .val();
                              localStorage
                                 .removeItem(
                                    'edrone_email'
                                    );
                              localStorage
                                 .setItem(
                                    'edrone_email',
                                    edrone_email
                                    );
                              if (
                                 edrone_email &&
                                 edrone_news ==
                                 'on'
                                 ) {
                                 window
                                    ._edrone =
                                    window
                                    ._edrone ||
                                    {};
                                 _edrone
                                    .app_id =
                                    edrone_app_id;
                                 _edrone
                                    .version =
                                    '1.0.0';
                                 _edrone
                                    .platform_version =
                                    '1.0.0';
                                 _edrone
                                    .platform =
                                    'custom';
                                 _edrone
                                    .customer_tags =
                                    'Checkout';
                                 _edrone
                                    .email =
                                    edrone_email;
                                 _edrone
                                    .action_type =
                                    'subscribe';
                                 _edrone
                                    .init();
                              }
                              if (
                                 $(
                                    this)
                                 .closest(
                                    'form'
                                    )
                                 .find(
                                    'input[name="shippingAddress.first_name"]'
                                    )
                                 .length
                                 ) {
                                 localStorage
                                    .removeItem(
                                       'edrone_name'
                                       );
                                 localStorage
                                    .setItem(
                                       'edrone_name',
                                       $(
                                          this)
                                       .closest(
                                          'form'
                                          )
                                       .find(
                                          'input[name="shippingAddress.first_name"]'
                                          )
                                       .val() +
                                       ' ' +
                                       $(
                                          this)
                                       .closest(
                                          'form'
                                          )
                                       .find(
                                          'input[name="shippingAddress.last_name"]'
                                          )
                                       .val()
                                       );
                              }
                              else {
                                 var edrone_json_data =
                                    $
                                    .parseJSON(
                                       $(
                                          '#__NEXT_DATA__')
                                       .html()
                                       );
                                 if (
                                    typeof edrone_json_data
                                    .props !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .customer !==
                                    'undefined' &&
                                    edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .customer !=
                                    null &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .customer
                                    .first_name !==
                                    'undefined'
                                    ) {
                                    localStorage
                                       .removeItem(
                                          'edrone_name'
                                          );
                                    localStorage
                                       .setItem(
                                          'edrone_name',
                                          edrone_json_data
                                          .props
                                          .initialState
                                          .order
                                          .order
                                          .customer
                                          .first_name +
                                          ' ' +
                                          edrone_json_data
                                          .props
                                          .initialState
                                          .order
                                          .order
                                          .customer
                                          .last_name
                                          );
                                 }
                              }
                              if (
                                 $(
                                    this)
                                 .closest(
                                    'form'
                                    )
                                 .find(
                                    'input[name="shippingAddress.city"]'
                                    )
                                 .length
                                 ) {
                                 localStorage
                                    .removeItem(
                                       'edrone_city'
                                       );
                                 localStorage
                                    .setItem(
                                       'edrone_city',
                                       $(
                                          this)
                                       .closest(
                                          'form'
                                          )
                                       .find(
                                          'input[name="shippingAddress.city"]'
                                          )
                                       .val()
                                       );
                              }
                              else {
                                 var edrone_json_data =
                                    $
                                    .parseJSON(
                                       $(
                                          '#__NEXT_DATA__')
                                       .html()
                                       );
                                 if (
                                    typeof edrone_json_data
                                    .props !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .shippingAddress !==
                                    'undefined' &&
                                    edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .shippingAddress !=
                                    null &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .shippingAddress
                                    .city !==
                                    'undefined' &&
                                    edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .shippingAddress
                                    .city !=
                                    null
                                    ) {
                                    localStorage
                                       .removeItem(
                                          'edrone_city'
                                          );
                                    localStorage
                                       .setItem(
                                          'edrone_city',
                                          edrone_json_data
                                          .props
                                          .initialState
                                          .order
                                          .order
                                          .shippingAddress
                                          .city
                                          );
                                 }
                              }
                           });
                     $('.form-step button[type="submit"]')
                        .hover(
                           function() {
                              localStorage
                                 .removeItem(
                                    'edrone_email'
                                    );
                              localStorage
                                 .setItem(
                                    'edrone_email',
                                    $(
                                       this)
                                    .closest(
                                       'form'
                                       )
                                    .find(
                                       'input[name="contact.email"]'
                                       )
                                    .val()
                                    );
                              if (
                                 $(
                                    this)
                                 .closest(
                                    'form'
                                    )
                                 .find(
                                    'input[name="shippingAddress.first_name"]'
                                    )
                                 .length
                                 ) {
                                 localStorage
                                    .removeItem(
                                       'edrone_name'
                                       );
                                 localStorage
                                    .setItem(
                                       'edrone_name',
                                       $(
                                          this)
                                       .closest(
                                          'form'
                                          )
                                       .find(
                                          'input[name="shippingAddress.first_name"]'
                                          )
                                       .val() +
                                       ' ' +
                                       $(
                                          this)
                                       .closest(
                                          'form'
                                          )
                                       .find(
                                          'input[name="shippingAddress.last_name"]'
                                          )
                                       .val()
                                       );
                              }
                              else {
                                 var edrone_json_data =
                                    $
                                    .parseJSON(
                                       $(
                                          '#__NEXT_DATA__')
                                       .html()
                                       );
                                 if (
                                    typeof edrone_json_data
                                    .props !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .customer !==
                                    'undefined' &&
                                    edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .customer !=
                                    null &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .customer
                                    .first_name !==
                                    'undefined'
                                    ) {
                                    localStorage
                                       .removeItem(
                                          'edrone_name'
                                          );
                                    localStorage
                                       .setItem(
                                          'edrone_name',
                                          edrone_json_data
                                          .props
                                          .initialState
                                          .order
                                          .order
                                          .customer
                                          .first_name +
                                          ' ' +
                                          edrone_json_data
                                          .props
                                          .initialState
                                          .order
                                          .order
                                          .customer
                                          .last_name
                                          );
                                 }
                              }
                              if (
                                 $(
                                    this)
                                 .closest(
                                    'form'
                                    )
                                 .find(
                                    'input[name="shippingAddress.city"]'
                                    )
                                 .length
                                 ) {
                                 localStorage
                                    .removeItem(
                                       'edrone_city'
                                       );
                                 localStorage
                                    .setItem(
                                       'edrone_city',
                                       $(
                                          this)
                                       .closest(
                                          'form'
                                          )
                                       .find(
                                          'input[name="shippingAddress.city"]'
                                          )
                                       .val()
                                       );
                              }
                              else {
                                 var edrone_json_data =
                                    $
                                    .parseJSON(
                                       $(
                                          '#__NEXT_DATA__')
                                       .html()
                                       );
                                 if (
                                    typeof edrone_json_data
                                    .props !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order !==
                                    'undefined' &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .shippingAddress !==
                                    'undefined' &&
                                    edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .shippingAddress !=
                                    null &&
                                    typeof edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .shippingAddress
                                    .city !==
                                    'undefined' &&
                                    edrone_json_data
                                    .props
                                    .initialState
                                    .order
                                    .order
                                    .shippingAddress
                                    .city !=
                                    null
                                    ) {
                                    localStorage
                                       .removeItem(
                                          'edrone_city'
                                          );
                                    localStorage
                                       .setItem(
                                          'edrone_city',
                                          edrone_json_data
                                          .props
                                          .initialState
                                          .order
                                          .order
                                          .shippingAddress
                                          .city
                                          );
                                 }
                              }
                           });
                     var order_url_time =
                        setInterval(
                           function() {
                              var path =
                                 window
                                 .location
                                 .pathname
                                 .split(
                                    '/'
                                    );
                              if (
                                 path[
                                    3
                                    ] ==
                                 'success'
                                 ) {
                                 clearInterval
                                    (
                                       order_url_time);
                                 var order_time =
                                    setInterval(
                                       function() {
                                          if (
                                             typeof LS !==
                                             'undefined' &&
                                             typeof LS
                                             .order !==
                                             'undefined' &&
                                             typeof LS
                                             .order
                                             .id !==
                                             'undefined' &&
                                             $(
                                                'script[type="application/json"]')
                                             .length
                                             ) {
                                             clearInterval
                                                (
                                                   order_time);
                                             var store_data =
                                                $
                                                .parseJSON(
                                                   $(
                                                      'script[type="application/json"]')
                                                   .html()
                                                   );
                                             var edrone_first_name =
                                                '';
                                             var edrone_last_name =
                                                '';
                                             if (
                                                localStorage
                                                .getItem(
                                                   'edrone_name'
                                                   )
                                                ) {
                                                var edrone_name =
                                                   localStorage
                                                   .getItem(
                                                      'edrone_name'
                                                      );
                                                edrone_name
                                                   =
                                                   edrone_name
                                                   .split(
                                                      ' '
                                                      );
                                                edrone_first_name
                                                   =
                                                   edrone_name[
                                                      0
                                                      ];
                                                edrone_name
                                                   .splice(
                                                      0,
                                                      1
                                                      );
                                                edrone_name
                                                   =
                                                   edrone_name
                                                   .join(
                                                      ' '
                                                      );
                                                edrone_last_name
                                                   =
                                                   edrone_name;
                                             }
                                             else if (
                                                typeof store_data
                                                .props !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer !==
                                                'undefined' &&
                                                store_data
                                                .props
                                                .initialState
                                                .customer !=
                                                null &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer
                                                .contact !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer
                                                .contact
                                                .first_name !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer
                                                .contact
                                                .last_name !==
                                                'undefined'
                                                ) {
                                                edrone_first_name
                                                   =
                                                   store_data
                                                   .props
                                                   .initialState
                                                   .customer
                                                   .contact
                                                   .first_name;
                                                edrone_last_name
                                                   =
                                                   store_data
                                                   .props
                                                   .initialState
                                                   .customer
                                                   .contact
                                                   .last_name;
                                             }
                                             else if (
                                                typeof store_data
                                                .props !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer !==
                                                'undefined' &&
                                                store_data
                                                .props
                                                .initialState
                                                .customer !=
                                                null &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer
                                                .contact !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer
                                                .contact
                                                .name !==
                                                'undefined'
                                                ) {
                                                var edrone_name =
                                                   store_data
                                                   .props
                                                   .initialState
                                                   .customer
                                                   .contact
                                                   .name;
                                                edrone_name
                                                   =
                                                   edrone_name
                                                   .split(
                                                      ' '
                                                      );
                                                edrone_first_name
                                                   =
                                                   edrone_name[
                                                      0
                                                      ];
                                                edrone_name
                                                   .splice(
                                                      0,
                                                      1
                                                      );
                                                edrone_name
                                                   =
                                                   edrone_name
                                                   .join(
                                                      ' '
                                                      );
                                                edrone_last_name
                                                   =
                                                   edrone_name;
                                             }
                                             var edrone_email =
                                                '';
                                             if (
                                                localStorage
                                                .getItem(
                                                   'edrone_email'
                                                   )
                                                ) {
                                                edrone_email
                                                   =
                                                   localStorage
                                                   .getItem(
                                                      'edrone_email'
                                                      );
                                             }
                                             else if (
                                                typeof store_data
                                                .props !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer !==
                                                'undefined' &&
                                                store_data
                                                .props
                                                .initialState
                                                .customer !=
                                                null &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer
                                                .contact !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .customer
                                                .contact
                                                .email !==
                                                'undefined'
                                                ) {
                                                edrone_email
                                                   =
                                                   store_data
                                                   .props
                                                   .initialState
                                                   .customer
                                                   .contact
                                                   .email;
                                             }
                                             var
                                          edrone_product_ids = [];
                                             var
                                          edrone_product_titles = [];
                                             var
                                          edrone_product_images = [];
                                             var
                                          edrone_product_urls = [];
                                             var
                                          edrone_product_counts = [];
                                             $.each(
                                                store_data
                                                .props
                                                .initialState
                                                .order
                                                .order
                                                .cart
                                                .lineItems,
                                                function(
                                                   ls_cart_item_key,
                                                   ls_cart_item
                                                   ) {
                                                   edrone_product_ids
                                                      .push(
                                                         ls_cart_item
                                                         .product_id
                                                         );
                                                   edrone_product_titles
                                                      .push(
                                                         ls_cart_item
                                                         .name
                                                         );
                                                   edrone_product_counts
                                                      .push(
                                                         ls_cart_item
                                                         .quantity
                                                         );
                                                   var thumb =
                                                      ls_cart_item
                                                      .thumbnail;
                                                   edrone_product_images
                                                      .push(
                                                         'https:' +
                                                         thumb
                                                         .replace(
                                                            '-100-0.',
                                                            '-1024-1024.'
                                                            )
                                                         );
                                                   edrone_product_urls
                                                      .push(
                                                         ls_cart_item
                                                         .url
                                                         );
                                                }
                                                );
                                             var edrone_order_payment_value =
                                                parseFloat(
                                                   $(
                                                      '.table-subtotal .table-footer .text-right.table-price')
                                                   .text()
                                                   .replace(
                                                      'R$',
                                                      ''
                                                      )
                                                   .replace(
                                                      '.',
                                                      ''
                                                      )
                                                   .replace(
                                                      ',',
                                                      '.'
                                                      )
                                                   );
                                             var edrone_city =
                                                '';
                                             if (
                                                typeof store_data
                                                .props !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .order !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .order
                                                .order !==
                                                'undefined' &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .order
                                                .order
                                                .shippingAddress !==
                                                'undefined' &&
                                                store_data
                                                .props
                                                .initialState
                                                .order
                                                .order
                                                .shippingAddress !=
                                                null &&
                                                typeof store_data
                                                .props
                                                .initialState
                                                .order
                                                .order
                                                .shippingAddress
                                                .city !==
                                                'undefined' &&
                                                store_data
                                                .props
                                                .initialState
                                                .order
                                                .order
                                                .shippingAddress
                                                .city !=
                                                null
                                                ) {
                                                edrone_city
                                                   =
                                                   store_data
                                                   .props
                                                   .initialState
                                                   .order
                                                   .order
                                                   .shippingAddress
                                                   .city;
                                             }
                                             else if (
                                                localStorage
                                                .getItem(
                                                   'edrone_city'
                                                   )
                                                ) {
                                                edrone_city
                                                   =
                                                   localStorage
                                                   .getItem(
                                                      'edrone_city'
                                                      );
                                             }
                                             window
                                                ._edrone =
                                                window
                                                ._edrone ||
                                                {};
                                             _edrone
                                                .app_id =
                                                edrone_app_id;
                                             _edrone
                                                .version =
                                                '1.0.0';
                                             _edrone
                                                .platform_version =
                                                '1.0.0';
                                             _edrone
                                                .platform =
                                                'custom';
                                             _edrone
                                                .action_type =
                                                'order';
                                             _edrone
                                                .email =
                                                edrone_email;
                                             _edrone
                                                .first_name =
                                                edrone_first_name;
                                             _edrone
                                                .last_name =
                                                edrone_last_name;
                                             _edrone
                                                .product_ids =
                                                edrone_product_ids
                                                .join(
                                                   '|'
                                                   );
                                             _edrone
                                                .product_skus =
                                                edrone_product_ids
                                                .join(
                                                   '|'
                                                   );
                                             _edrone
                                                .product_titles =
                                                encodeURIComponent(
                                                   edrone_product_titles
                                                   .join(
                                                      '|'
                                                      )
                                                   );
                                             _edrone
                                                .product_images =
                                                encodeURIComponent(
                                                   edrone_product_images
                                                   .join(
                                                      '|'
                                                      )
                                                   );
                                             _edrone
                                                .product_urls =
                                                encodeURIComponent(
                                                   edrone_product_urls
                                                   .join(
                                                      '|'
                                                      )
                                                   );
                                             if (
                                                edroneGetCookie(
                                                   '_cartDataEdrone'
                                                   )
                                                ) {
                                                var edrone_products =
                                                   JSON
                                                   .parse(
                                                      edroneGetCookie(
                                                         '_cartDataEdrone'
                                                         )
                                                      );
                                                var
                                             edrone_product_category_ids = [];
                                                var
                                             edrone_product_category_names = [];
                                                $.each(
                                                   store_data
                                                   .props
                                                   .initialState
                                                   .order
                                                   .order
                                                   .cart
                                                   .lineItems,
                                                   function(
                                                      edrone_product_id_key,
                                                      edrone_product_id_item
                                                      ) {
                                                      $.each(
                                                         edrone_products,
                                                         function(
                                                            edrone_product_key,
                                                            edrone_product_item
                                                            ) {
                                                            if (
                                                               edrone_product_id_item
                                                               .product_id ==
                                                               edrone_product_item
                                                               .product_ids
                                                               ) {
                                                               edrone_product_category_ids
                                                                  .push(
                                                                     edrone_product_item
                                                                     .product_category_ids
                                                                     );
                                                               edrone_product_category_names
                                                                  .push(
                                                                     edrone_product_item
                                                                     .product_category_names
                                                                     );
                                                            }
                                                         }
                                                         );
                                                   }
                                                   );
                                                if (
                                                   edrone_product_category_ids
                                                   ) {
                                                   _edrone
                                                      .product_category_ids =
                                                      edrone_product_category_ids
                                                      .join(
                                                         '|'
                                                         );
                                                   _edrone
                                                      .product_category_names =
                                                      edrone_product_category_names
                                                      .join(
                                                         '|'
                                                         );
                                                }
                                                edroneDeleteCookie
                                                   (
                                                      '_cartDataEdrone');
                                             }
                                             _edrone
                                                .product_counts =
                                                edrone_product_counts
                                                .join(
                                                   '|'
                                                   );
                                             _edrone
                                                .order_id =
                                                LS
                                                .order
                                                .id;
                                             _edrone
                                                .country =
                                                'BRA';
                                             _edrone
                                                .city =
                                                edrone_city;
                                             _edrone
                                                .base_currency =
                                                LS
                                                .currency;
                                             _edrone
                                                .order_currency =
                                                LS
                                                .currency;
                                             _edrone
                                                .base_payment_value =
                                                edrone_order_payment_value;
                                             _edrone
                                                .order_payment_value =
                                                edrone_order_payment_value;
                                             _edrone
                                                .init();
                                          }
                                       },
                                       100
                                       );
                              }
                           },
                           100
                           );
                  })(jQuery,
                  this);
               }
            }, 100);
      });
</script> <!-- Edrone fim -->
