const source = fromEvent(document, 'click')
    .pipe(
        debounceTime(20)
    );
source.subscribe(val => console.log(val));
