# HTMF Events

This library creates events after the HTML swap by the `html-form` library.

## Installation

First install `html-form`.

```
npm i html-form
```

Then install events.

```
npm i html-form-events
```

## How it works

From the back end response add to the header:

```
hf-events: {"eventName1": {"detail1": "value1"}, "eventName2": {"detail2": "value2"}}
```

The header name is `hf-events`. The event will be the keys. The detail values
for each event will be the JSON value of each key.
