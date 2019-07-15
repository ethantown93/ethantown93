$(document).ready(function() {


$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 500);
 });

let typed = new Typed('#typed', { 
  strings: ['Hi! My name is Ethan Townsend, I’m 26 years old, and I currently live in San Diego California.', 'I\'m an aspiring full stack web developer.', 'I originally grew up in Maine, I lived there until I was 18 years old.', 
  'After graduating High School I joined the United States Army as a United States Infantryman.', 'During that time, my family decided to make the move out to San Diego California.',
  'So, after my contract with the Army ended, I moved out here to be with them.', 'Since coming to California I’ve been working as a Cable Technician for a major communications provider out here.',
   'I’ve always had an interest in building websites and working online, but It wasn’t until enrolling at Bellevue that I actually decided to pursue coding.', 'So far, I’m absolutely loving it. I couldn’t be more happy about my decision to become a developer.',
    'I don’t have any prior experience in coding, so the learning curve has been a bit hard, but I’m starting.', 'Welcome to my personal portfolio.'],
  typeSpeed: 40,
  backSpeed: 30,
  smartBackspace: true,
  loop: TextTrackCue
});

});

