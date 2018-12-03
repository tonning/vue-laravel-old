### Installation
Pull in by running: `yarn add @tonning/vue-laravel-old`

In your app.blade.php layouts file add:
```html
<script type="text/javascript">
    let Laravel = {
        old: {!! json_encode(old()) !!},
    };
</script>
```

In your app.js file
* `import Vue from 'vue'`  
* `import VueLaravelOld from 'vue-laravel-old'` 
* `Vue.use('vue-laravel-old', Laravel.old)`  


### Usage
Now you can use it in Vue and your Vue components  
`Vue.$old.get('email')` or `this.$old.get('email')`
