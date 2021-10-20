# form-to-json

This REST endpoint gets any HTML form (`application/x-www-form-urlencoded`) sent as a POST request's body, converts it to JSON (`application/json`), and sends the converted data further to any URL.

In other words,

`Form in Browser ----> This API ----> Another REST API (JSON)`

## Usage

```
https://artginzburg.runkit.io/form-to-json/branches/master/:url
```

> Change `:url` at the end to the desired "receiver" link

## Example

Let's say a CRM (like https://www.1c-bitrix.ru) uses webhooks to send forms to an analytics service (like https://rick.ai)

The only trouble is that the CRM sends data in HTML Form format, whereas the analytics endpoint expects raw JSON

To solve this, the CRM could be configured to send data, instead of the initial analytics endpoint — like:

`https://exchange.rick.ai/webhooks/kolskytour/lead`

, to form-to-json API, specifying the initial analytics endpoint as a parameter — like this:

```
https://artginzburg.runkit.io/form-to-json/branches/master/https://exchange.rick.ai/webhooks/kolskytour/lead
```

<br />

In other words, just combining form-to-json URL with another endpoint (in that particular order) will send the converted data as expected.
