export function routeHandler(url) {
  switch(url.pathname) {
    case "/demo/":
      return htmlResponse("Foo")
    case "/fail/":
      return new Response("Foo", {
        headers: {
          "Content-Type": "text/html",
          "hf-events": `{bad: JSON}`
        }
      })
  }
}

function htmlResponse(str) {
  return new Response(str, {
    headers: {
      "Content-Type": "text/html",
      "hf-events": `{"event1": {"ok": "ok"}, "event2":true}`
    }
  })
}
