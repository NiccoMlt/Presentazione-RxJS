const source = fromEvent(document, 'click')
    .pipe(map(event => event.timeStamp));
source.subscribe(val => console.log(val));
