---
layout:    post
title:     "Modifying Unity’s Camera ImageEffects values at runtime"
author:    "Chuck Bergeron"
category:  blog
date:      "2016-07-05T15:00:00.200Z"
published: true
excerpt: A couple of months ago I was mussing around integrating noise, vigenette, chromatic aberration, and other image effects into Astervoid 2000.
tags: ["music", "ableton", "live"]
shared_square_image: posts/LoFiFox-running-animated-still-lightboxed_114.jpg
shared_description: Modifying Unity’s Camera ImageEffects values at runtime
---


<p> A couple of months ago I was mussing around integrating noise, vigenette, chromatic aberration, and other image effects into Astervoid 2000. </p>
<!-- more -->

 <p> I found it wasn’t enough to just throw the image effects on the camera, I also wanted to change them at runtime depending on various events happening in the game. </p> <div> <video id="gif-mp4" poster="https://media.giphy.com/media/l0K46X5vYigLTUkZq/200_s.gif" style="margin:0;padding:0" width="100%" height="292" autoplay="" loop=""><source src="https://media.giphy.com/media/l0K46X5vYigLTUkZq/giphy.mp4" type="video/mp4"> Your browser does not support the mp4 video codec. </source></video><div id="noplay" style="display:none"> Your browser does not support the mp4 video codec. </div> <span class="caption">Example of chromatic aberration offset &amp; bloom intensity changing over time.</span> </div> <p> While coming up with a solution, I didn’t find this as straightforward as I had hoped it would be in Unity, and wanted to document and share the technique I devised for fellow game devs to use. </p> <p> I started with the interface I wanted our team to use. Essentially, it’d be nice to call a method from anywhere in our codebase (an event handler, when a certain GameObject shows up, etc). I came up with a 1-liner solution like so: </p> <pre class="highlight prettyprint linenums"><code>// Kick up noise intensity to 1.5 over 0.8 seconds DynamicCameraEffects.BringTheNoise(newIntensity: 1.5f, duration: 0.8f);</code></pre> <p> `DynamicCameraEffects` is a C# class inheriting from MonoBehaviour that is added to camera. This camera also needs Unity’s ‘Noise And Grain’ ImageEffect from StandardAssets. </p> <p> Once the noise has hit it’s desired effect, the callback `RemoveNoise()` pulls out the effect after a random amount of time has passed. </p> <p> One gotcha, I needed to reference the Unity ImageEffects namespace via `using UnityStandardAssets.ImageEffects;` </p> <p> Also, we rely heavily on <a href="http://dotween.demigiant.com/">DOTween</a> to simplify changing values over time (Similar to MCTween for Flash, &lsquo;member that?). It has a ton of helpers to clean up your code and provides a bunch of <a href="http://easings.net/">easing equations</a>, but you could also re-write this with a <a href="https://www.google.com/search?q=lerp">typical LERPing implementation</a>. </p> <p> The whole class for affecting Noise looks something like this: </p> <pre class="highlight prettyprint linenums"><code>using DG.Tweening; // remove this if you're not using DOTween using System.Collections; using UnityEngine; using UnityStandardAssets.ImageEffects; /// <summary> /// An extension class for dynamically adding noise to the camera easily at runtime /// </summary> public class DynamicCameraEffects : MonoBehaviour { private static NoiseAndGrain _noiseScript; private void Start() { _noiseScript = GetComponent<noiseandgrain>(); } public static void BringTheNoise(float newIntensity, float duration) { DOTween.To(() =&gt; _noiseScript.intensityMultiplier, x =&gt; _noiseScript.intensityMultiplier = x, newIntensity, duration) .SetEase(Ease.OutCirc) .SetUpdate(true) .OnComplete(RemoveNoise); } private static void RemoveNoise() { var duration = Random.Range(0.2f, 1f); DOTween.To(() =&gt; _noiseScript.intensityMultiplier, x =&gt; _noiseScript.intensityMultiplier = x, 0.45f, duration) .SetEase(Ease.InQuad) .SetUpdate(true); } } </noiseandgrain></code></pre>

<span class="caption">
    <a href="https://gist.github.com/chuckbergeron/0f6b1184f750dd8607c574247330428e">Download/Gist</a> - <a href="https://gist.githubusercontent.com/chuckbergeron/0f6b1184f750dd8607c574247330428e/raw/bb35cd6617f24d9833e21dcb4a84091456870fcc/DynamicCameraEffects.cs">Raw</a>
</span>

<p> You could control the effect manually by deleting the `RemoveNoise()` function, and the `OnComplete(RemoveNoise)`. </p> <p> This also makes it easier to create effects loops where every X number of seconds effects are added and pulled off the camera, breathing life into your game and making every playthrough unique. </p> <p> Happy game dev'ing! </p>
