var button = document.querySelector('input');


var obs = Rx.Observable.fromEvent(button, 'input');


var obs1 = Rx.Observable.of(1,2,3,4);


obs
.map( (event) => event.target.value )
.debounceTime(4000)
.distinctUntilChanged()
.subscribe((value) => console.log(value));

obs.switchMap( (event) => obs1)
.subscribe( value => console.log("switchmap" + value));

obs.mergeMap((event) => {
return obs1.map((value) => value + event.target.value)
})
.subscribe((value) => console.log("value" + value));

obs1
.map(value => value*2)
.subscribe(value => console.log(value));


