---
title: 'Nuances of Orthogonal A/B Tests'
date: '2023-04-28'
tag: 'a/b testing'
---

Every team I've worked on has, at one point or another, needed some A/B testing functionality. But as buckets become limited there's always a lot of pressure to switch to Orthogonal A/B test groups is always proposed.

While there is a place for Orthogonal A/B testing, I'd caution people from immediately thinking they've found endless buckets to use. I hope by outlining some gotchas of Orthogonal A/B testing you can make more informed decisions about when to stick with a single layer of A/B groups, and when it is in fact time to deploy overlapping experiments.

## What even is "Orthogonal" A/B Testing?

You may know this style of experimenting as "Overlapping Test Splits" as well. The idea is pretty straight forward. For a single layer of A/B testing you randomize users into different buckets. So, if you just use a different seed for each layer of A/B tests, the users in each layer should have a uniformly random chance of falling into any other layer of A/B tests. This allows you to run multiple experiments per user, and still have that gold standard for analyzing causality for each layer.

To run orthogonal A/B tests you _only_ need to make sure each experiment layer is statistically independent (I mean that's why it's called _orthogonal_ after all). That being said, making sure everything is independent is much easier said than done.


## No free lunch

There are some potential issues with overlapping tests, the obvious one being clashing experiments, i.e. not statistically independent. 

A good example of this is if one team is testing background colors for a webpage, and another team is testing text colors. There will be some odd performance metrics when users end up with matching colors in the two separate layers of experiments.

Often times clashing experiments can be avoided with good domain boundaries between teams (there should really only be one layer of experiments for testing colors on a webpage). When experiment interference can't be avoided it's a pretty good code smell that these experiments should be part of the same layer. 

## Can we avoid clashing experiments before hand?

If only it were so simple. There are endless, unintuitive ways two experiments can interfere with one another. 

That being said, it's really not worth the effort to think of every edge case in advance. Just split experimentation layers on intuition at first, and then let the data show you whre there are some non-independent layers. Worse case scenario is two teams have impacted each other's experiments. But you can just chalk it up to a great learning experience and improve your processes in the next round. Experimentation is about learning, and your A/B testing system is an experiment in and of itself!

## Apples & Oranges

In my experience the outcome of A/B tests is _forecasting_ value of a new treatment. When you have multiple layers of experiments, you have multiple layers of non-comparable forecasts.

As a quick aside, I loathe _forecasting revenue_ in general. When you are asked to predict how much revenue a treatment will bring for the next quarter (or even the next _year_), just know that it will never truly be accurate. But not being accurate does not mean you can't have some fun with statistics and produce something useful. [David Mannheim has a great series of posts on this.](https://www.linkedin.com/pulse/you-cant-accurately-attribute-nor-forecast-revenue-heres-mannheim/)

The reason the forecasts are non-comparable is that each layer has a unique control from which a percentage increase on a metric has been computed. Controls should be as isolated as possible, but a control in Layer N has an evenly distributed assortment of all the treatments and controls of every other layer. 

What I find a bit silly, is that sometimes executives will take all of the forecasts from the winning treatments in these separate layers and simply add them together. Since each each layer has a different baseline and the interaction of the two treatments has never been tested, it makes for a poor proxy of how the treatments combined would perform against the control on every layer.

A better approach would be to make a bundle of all the controls in each layer, and all the winning treatments in each layer and compare both bundles. Or a decent proxy would be to run treatment experiments from the layers in isolation against the same control and then compare their performance (note that if you're using frequentist approaches, you'd probably want to adjust the power of your experiment for all each comparison against the same control though). Which kind of brings us back to having just one layer of experiments.

## One layer to rule them all

So, only using one layer makes comparing treatments a lot more sensible, but it has the draw back of limiting the number of simultaneous experiments that can be run. If you care about forecasting quantitative value, try to use one layer so you have a common and comparable baseline. It slows the rate of experiments, but makes the analysis more meaningful, and in my opinion that is a worthy trade off. On the other hand if you only care about directionality, which I'd highly recommend, then orthogonal a/b testing layers makes a lot of sense. Sometime it makes sense to use orthogonal layers when you are focused on quantitative values, especially if the metrics in layers are different.

All this to say, experiment with your experiments and find what works best for you.

For more on A/B testing, I'd recommend reading Ron Kohavi's [Trustworthy Online Controlled Experiments : A Practical Guide to A/B Testing](https://experimentguide.com/)