### How to see pdf output

```bash
docker build -t hello:word .
docker run -d --rm --name hi hello:world tail -f /dev/null
docker cp hi:/usr/src/app/renders ~/Desktop/hi/
docker stop hi
```
