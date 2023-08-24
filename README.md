# REDIRECT SERVER

Simply NextJS project for redirecting requests to another uri.

## Usage

Set as environment variable:

```bash
TO_URI=https://<uri>.com
or 
ALL_TO_URI=https://<uri>.com
```

## TO_URI SAMPLE

`http://old.domain.com/<slug*>` -> `<TO_URI>/<slug*>`
`http://old.domain.com/` -> `<TO_URI>/`

## ALL_TO_URI SAMPLE

`http://old.domain.com/<slug*>` -> `<ALL_TO_URI>`
`http://old.domain.com/` -> `<ALL_TO_URI/`
