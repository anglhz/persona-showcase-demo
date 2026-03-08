

## Add Static Website Identifier to Contact Form

A simple one-line change to the n8n webhook payload in `src/components/Contact.tsx`.

### What changes

In the `fetch` call to n8n, add a static `website: "fertekz.com"` field to the JSON body. This gives you a reliable, environment-independent identifier to use in n8n if-statements.

### Technical details

**File:** `src/components/Contact.tsx`

Update the n8n webhook `body` from:
```js
body: JSON.stringify({
  type: 'contact',
  site: window.location.origin,
  name: data.name,
  ...
})
```

To:
```js
body: JSON.stringify({
  type: 'contact',
  website: 'fertekz.com',
  site: window.location.origin,
  name: data.name,
  ...
})
```

The existing `site` field is kept for debugging purposes, but the new `website` field is what you would use in n8n to route with if-statements. For your other sites, you would set `website: 'intuitive-gaming.com'` etc.

