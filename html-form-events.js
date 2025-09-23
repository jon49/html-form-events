document.addEventListener("hf:swapped", e => {
    let { response, originator } = e.detail
    let { send } = window.htmf

    let maybeEvents = response.headers.get("hf-events")

    if (maybeEvents) {
        try {
            let events = JSON.parse(maybeEvents)
            for (let [key, detail] of Object.entries(events)) {
                send(originator, key, detail, null, "")
            }
        } catch(error) {
            console.error("HTMF Event Failed", e, error)
        }
    }
})
