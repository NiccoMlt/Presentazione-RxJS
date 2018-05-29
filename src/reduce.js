const source = from([1, 2, 3])
    .pipe(
        reduce((acc, curr) => acc + curr, 0)
    );
source.subscribe(val => console.log(val));
