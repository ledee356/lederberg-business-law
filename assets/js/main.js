$('.business').hover(
    function() {
      $this = $('.business');
        $this.data('initialText', $this.text());
        $this.text("Lederberg Business Law was founded around a desire to provide each client individual with partner level service, drawing upon knowledge and experience learned  over 25 years of practicing law; this means  we not only can help solve your business law problems, we can often prevent them from even happening.");
        $this.css("fontSize", "20px");
    },
    function() {
        $this.css("fontSize", "100px");
        $this.text($this.data('initialText'));
    }
);

// $('.criminal').hover(
//     function() {
//       $this = $('.criminal');
//         $this.data('initialText', $this.text());
//         $this.text("We offer XYZ services for our Criminal law and its is the best and un paralleled oh boy oh boy.");
//         $this.css("fontSize", "20px");
//     },
//     function() {
//         $this.css("fontSize", "100px");
//         $this.text($this.data('initialText'));
//     }
// );
//
// $('.employment').hover(
//     function() {
//       $this = $('.employment');
//         $this.data('initialText', $this.text());
//         $this.text("We offer XYZ services for our Criminal law and its is the best and un paralleled oh boy oh boy.");
//         $this.css("fontSize", "20px");
//     },
//     function() {
//         $this.css("fontSize", "100px");
//         $this.text($this.data('initialText'));
//     }
// );
