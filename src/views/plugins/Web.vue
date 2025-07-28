<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Web</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="auto" style="text-align: center">
            <strong>Test URLs</strong>
            <ion-button @click="() => openSignSandbox()"
              >Open Sign Sandbox</ion-button
            >
            <ion-button @click="() => testWithGoogle()"
              >Test Google.com</ion-button
            >
            <ion-button @click="() => openSignSandboxFallback()"
              >Open Sign Sandbox (Fallback)</ion-button
            >
            <ion-button @click="() => openSignSandboxNoHeaders()"
              >Open Sign Sandbox (No Headers)</ion-button
            >
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { InAppBrowser } from "@capgo/inappbrowser";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCol,
  IonRow,
  IonBackButton,
  IonGrid,
  IonButtons,
} from "@ionic/vue";
import { onMounted, onUnmounted } from "vue";

// Define component name for linter
defineOptions({
  name: "WebViewPage",
});

const WEB_URL = "https://sign-sandbox.farashenasa.ir/";

async function openSignSandbox() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Sign Sandbox",
      showArrow: true,
      showReloadButton: true,
      // Add comprehensive headers to bypass iOS WebKit restrictions
      headers: {
        // Mobile User-Agent to avoid desktop restrictions
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
        // Accept headers for better compatibility
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        // Cache control to avoid cached restrictions
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        // Security headers to bypass restrictions
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        // Additional headers to handle X-Frame-Options
        "X-Requested-With": "XMLHttpRequest",
        "X-Frame-Options": "SAMEORIGIN",
        "X-Content-Type-Options": "nosniff",
        // Referer to make it look like a direct navigation
        Referer: "https://sign-sandbox.farashenasa.ir/",
        Origin: "https://sign-sandbox.farashenasa.ir",
        // Connection headers
        Connection: "keep-alive",
        DNT: "1",
      },
      // Add these options for better compatibility
      activeNativeNavigationForWebview: true,
      disableGoBackOnNativeApplication: false,
      // Enable inspection for debugging
      isInspectable: true,
      // Present after page load to ensure proper initialization
      isPresentAfterPageLoad: true,
      // Add share disclaimer to avoid the debug message
      shareDisclaimer: {
        title: "Share",
        message: "Do you want to share this content?",
        confirmBtn: "Share",
        cancelBtn: "Cancel",
      },
    });
    console.log("Sign Sandbox opened successfully");
  } catch (error) {
    console.error("Failed to open Sign Sandbox:", error);
  }
}

async function testWithGoogle() {
  console.log("Testing with Google HTTPS URL");

  try {
    await InAppBrowser.openWebView({
      url: "https://google.com",
      title: "Google HTTPS Test",
      showArrow: true,
      showReloadButton: true,
    });
    console.log("Google URL test successful");
  } catch (error) {
    console.error("Google URL test failed:", error);
  }
}

// Add fallback function with alternative headers
async function openSignSandboxFallback() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening with fallback headers:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Sign Sandbox (Fallback)",
      showArrow: true,
      showReloadButton: true,
      // Alternative headers strategy - minimal headers
      headers: {
        // Desktop User-Agent to bypass mobile restrictions
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        // Minimal accept headers
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        // No cache
        "Cache-Control": "no-cache",
        // Basic security
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Upgrade-Insecure-Requests": "1",
      },
      // Different options for fallback
      activeNativeNavigationForWebview: false,
      disableGoBackOnNativeApplication: true,
      isInspectable: true,
      isPresentAfterPageLoad: false,
    });
    console.log("Sign Sandbox fallback opened successfully");
  } catch (error) {
    console.error("Failed to open Sign Sandbox fallback:", error);
  }
}

// Add function to test with no headers at all
async function openSignSandboxNoHeaders() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening with no headers:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Sign Sandbox (No Headers)",
      showArrow: true,
      showReloadButton: true,
      // No headers at all - let the browser handle everything
      activeNativeNavigationForWebview: true,
      disableGoBackOnNativeApplication: false,
      isInspectable: true,
    });
    console.log("Sign Sandbox no headers opened successfully");
  } catch (error) {
    console.error("Failed to open Sign Sandbox no headers:", error);
  }
}

let listeners: any[] = [];

onMounted(async () => {
  console.log("mounted");

  // Store listener references for cleanup
  const messageListener = await InAppBrowser.addListener(
    "messageFromWebview",
    async (msg) => {
      console.log("MESSAGE FROM WEB VIEW", msg);

      const message = (msg.detail.message as string) ?? "";
      if (message === "close") {
        await InAppBrowser.postMessage({
          detail: {
            action: "confirmClose",
            message: "Are you sure you want to close?",
          },
        });
        console.log("confirmClose send");
      } else if (message === "closeConfirmed") {
        await InAppBrowser.close();
        console.log("close confirmed");
      }
      if (message === "clear-specific") {
        console.log("magic");
        const cookies = await InAppBrowser.getCookies({ url: WEB_URL });
        if (cookies.magicCount) {
          console.log("del magic count");
          InAppBrowser.clearCookies({ url: WEB_URL });
        }
      }
      if (message === "clear-all") {
        console.log("magic (clear all)");
        const cookies = await InAppBrowser.getCookies({ url: WEB_URL });
        if (cookies.magicCount) {
          console.log("del magic count");
          InAppBrowser.clearAllCookies();
        }
      }
    }
  );

  const buttonListener = await InAppBrowser.addListener(
    "buttonNearDoneClick",
    async () => {
      await InAppBrowser.setUrl({ url: "https://web.capgo.app/login" });
    }
  );

  const urlChangeListener = await InAppBrowser.addListener(
    "urlChangeEvent",
    (event) => {
      console.log("URL changed:", event.url);
    }
  );

  const pageLoadedListener = await InAppBrowser.addListener(
    "browserPageLoaded",
    () => {
      console.log("Page loaded");
    }
  );

  const pageErrorListener = await InAppBrowser.addListener(
    "pageLoadError",
    () => {
      console.log("Page load error");
    }
  );

  const confirmBtnListener = await InAppBrowser.addListener(
    "confirmBtnClicked",
    (event) => {
      console.log("Confirm button clicked:", event.url);
    }
  );

  // Store all listeners for cleanup
  listeners = [
    messageListener,
    buttonListener,
    urlChangeListener,
    pageLoadedListener,
    pageErrorListener,
    confirmBtnListener,
  ];
});

// Add cleanup on component unmount
onUnmounted(() => {
  console.log("Cleaning up InAppBrowser listeners");
  listeners.forEach((listener) => {
    if (listener && typeof listener.remove === "function") {
      listener.remove();
    }
  });
  listeners = [];
});
</script>
