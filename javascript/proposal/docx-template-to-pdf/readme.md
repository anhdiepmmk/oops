### How to see pdf output

```bash
docker build -t hello:word .
docker run -d --rm --name hi hello:world tail -f /dev/null
docker cp hi:/usr/src/app/renders ~/Desktop/hi/
docker stop hi
```

### Custom fonts installation

> if you have any custom fonts, consider to copy it to font folder

```
/usr/share/fonts
```
