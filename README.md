# docusarus-reprod
Minimal Reprod Demo for Docusaurus Broken Links Scenario 

Steps to Reproduce 

1. Run `npm i` at root directory. 
2. Run `npm i` in doc_site directory. 
3. Run `npm run build` in doc_site directory. 


## Bug Description 

A class is defined in an index file in the examples library [Link](https://github.com/rbala19/docusarus-reprod/blob/main/libs/examples/basic/src/index.ts). 
This produces a broken link where the index module in this library builds a malformed link to this class. 

```
Exhaustive list of all broken links found:

- On source page path = /code/@app/example-library/modules/:
   -> linking to ../classes/.TestDocusaurusFailure (resolved as: /code/@app/example-library/classes/.TestDocusaurusFailure)
```
