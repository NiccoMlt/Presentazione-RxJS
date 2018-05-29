const source = from([1, 2, 3])
    .pipe(
        tap(val => console.log(val))
    );
