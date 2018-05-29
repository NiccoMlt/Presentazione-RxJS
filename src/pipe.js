const stream = interval(350).pipe(
    take(25),
    map(gaussian),
    map(num => "•".repeat(Math.floor(num * 65)))
);
stream.subscribe(dot => (console.log(dot)));
