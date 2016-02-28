---
layout: post
title: Mistakes are learning opportunities
categories:
- blog
---

For those new interns out there: making a bug isn't the end of the world.

---

## Making the bug

So, the other day I introduced a small bug into a project I was working on (I'm not proud of it, but in my defence I was still learning Spring Boot at the time) and I was scared. Here I was a new intern at a company that was so kind to hire me and teach me, and what do I do? I break a service. Luckily my bug didn't get past the feature branch, but I was worried my job was on the line. For those of you who are curious: I forgot to add a value in the properties file and I was relying on `maven clean install` to let me know if everything was okay. This lead to the tests passing, but the application not actually being able to run... 

## Dealing with the bug

My first instinct was to fix the bug without anyone noticing, but merges needing code reviews spoiled my sneaky ninja fix plan. So, after about an hour of plotting I decided the best thing to do was talk to my mentor. I walked up to him and said "I broke everything, and I need your help", which in hind sight was probably not the best way to voice the problem I was having, but it did get him to help me in a hurry! I showed him what I had done, how I planned to fix it, and that I wanted him to merge the fix discretely. 

## Learning from the bug

My Mentor merged my changes, but didn't follow my request of being discrete... Instead I had to tell the whole team I broke some code, which was what I was fearing from the get-go. He told me, when something breaks everyone has to know or else everyone will be wasting time trying to fix a bug that you already know how to deal with. He then proceeded to tell me the story of the __$1,000,000 bug__. 

> There once was a senior developer who pushed buggy code that got all the way to the production branch, and made the main site stop working for whole 48hrs. This cost the company around a million dollars in sales. Everyone thought he'd be fired, but instead the management told him to figure out what made this problem, how to fix it, and to make sure it doesn't happen again.


My mentor then went on to tell me that making mistakes is one of the most valuable lessons you can get. If the management were simply to fire the developer who caused the bug it could happen again, and no one would know what was wrong or how to fix it. You become a better developer by learning from your mistakes, not by playing it safe and not trying anything new. Obviously, my bug was little and it didn't teach me too much about spring (besides to run my application be for pushing), but it taught me how to deal with mistakes! So, in the end I was really happy I made a bug; I won't make it again and the experience gave me the confidence to try bigger tasks without the fear that I'll ruin something. I might break some code, but at least I'll learn from the experience and become a better programmer because of it!


