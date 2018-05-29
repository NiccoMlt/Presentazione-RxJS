Observable.of('a', 'b', 'c', 'd', 'e')
    .pipe(
        map(c => { if (c == 'c') { throw 'c!'; } return c; }),
        catch(err => Observable.of(1, 2, 3)),
    )
    .subscribe(x => console.log(x));
