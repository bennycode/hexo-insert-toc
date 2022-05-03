# hexo-insert-toc

Small plugin to insert a table of contents (TOC) in Hexo posts and pages by placing a `<!-- toc -->` in your Markdown files.

## Configuration

The [basic options](https://github.com/jonschlinkert/markdown-toc#options) from [markdown-toc](https://github.com/jonschlinkert/markdown-toc) are supported. Simply add them to your [Hexo config file](https://hexo.io/docs/configuration.html) using the property "hexo-insert-toc".

### Example

**\_config.json**

```json
{
  "hexo-insert-toc": {
    "maxdepth": 2
  }
}
```

## Compatibility

Tested with [Hexo](https://hexo.io/) v6.1.0.
