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
            <strong>WebView</strong>
            <ion-button @click="() => openWebWithPickerMaterial()"
              >web share with picker material</ion-button
            >
            <ion-button @click="() => openWebWithPickerOld()"
              >web share with picker old</ion-button
            >
            <ion-button @click="() => openWeb()">open web</ion-button>
            <ion-button @click="() => openWebDarkMode()"
              >web dark mode</ion-button
            >
            <ion-button @click="() => openWebWithHeaders()"
              >web with headers</ion-button
            >
            <ion-button @click="() => openWebWithCredentials()"
              >web with credentials</ion-button
            >
            <ion-button @click="() => openWebWithDisclaimer()"
              >web share with disclaimer</ion-button
            >
            <ion-button @click="() => openWebWithAllOptions()"
              >web with all options</ion-button
            >
            <ion-button @click="() => openWithShowArrow()"
              >web with just arrow</ion-button
            >
            <ion-button @click="() => openFlohkids()"
              >open flohkids.de</ion-button
            >
            <ion-button @click="() => openBlankWithBidirectionalCommunication()"
              >blank with bidirectional communication</ion-button
            >
            <ion-button @click="() => openDeepLinkTest()"
              >deep link test</ion-button
            >
            <ion-button @click="() => openDeepLinkTestPrevent()"
              >deep link test (prevent)</ion-button
            >
            <ion-button @click="() => openBrokenUrlWithButton()"
              >broken URL with button test</ion-button
            >
          </ion-col>
          <ion-col size="auto" style="text-align: center">
            <strong>Open</strong>
            <ion-button @click="() => openSimple()">open simple</ion-button>
            <ion-button @click="() => openWithOptions()"
              >open with options</ion-button
            >
            <ion-button @click="() => openWithInspectable()"
              >open inspectable</ion-button
            >
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- Add Sign Sandbox Testing Section -->
      <ion-grid>
        <ion-row>
          <ion-col size="auto" style="text-align: center">
            <strong>Sign Sandbox Testing</strong>
            <ion-button @click="() => testSignSandbox()"
              >Test Sign Sandbox</ion-button
            >
            <ion-button @click="() => testSignSandboxSimple()"
              >Simple Test</ion-button
            >
            <ion-button @click="() => testDefaultHeaders()"
              >Default Headers</ion-button
            >
            <ion-button @click="() => testMobileHeaders()"
              >Mobile Headers</ion-button
            >
            <ion-button @click="() => testDesktopHeaders()"
              >Desktop Headers</ion-button
            >
            <ion-button @click="() => testBypassHeaders()"
              >Bypass Headers</ion-button
            >
            <ion-button @click="() => testSignSandboxWithDifferentHeaders()"
              >Test All Headers</ion-button
            >
            <ion-button @click="() => testWithErrorHandling()"
              >Error Handling Test</ion-button
            >
            <ion-button @click="() => openInExternalBrowser()"
              >External Browser</ion-button
            >
            <ion-button @click="() => openInNewTab()">New Tab</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- Add URL Testing Section -->
      <ion-grid>
        <ion-row>
          <ion-col size="auto" style="text-align: center">
            <strong>URL Testing & Debug</strong>
            <ion-button @click="() => testWithExample()"
              >Test Example.com</ion-button
            >
            <ion-button @click="() => testWithGoogle()"
              >Test Google.com</ion-button
            >
            <ion-button @click="() => testOriginalUrl()"
              >Test Original URL</ion-button
            >
            <ion-button @click="() => testUrlWithAccessibilityCheck()"
              >Test with Check</ion-button
            >
            <ion-button @click="() => progressiveUrlTesting()"
              >Progressive Test</ion-button
            >
            <ion-button @click="() => getDebugInfo()">Debug Info</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- Add Header Testing Section -->
      <ion-grid>
        <ion-row>
          <ion-col size="auto" style="text-align: center">
            <strong>Header Testing</strong>
            <ion-button @click="() => openSignSandboxWithHeaders()"
              >With Headers</ion-button
            >
            <ion-button @click="() => openSignSandboxWithMobileHeaders()"
              >Mobile Headers</ion-button
            >
            <ion-button @click="() => openSignSandboxWithBypassHeaders()"
              >Bypass Headers</ion-button
            >
            <ion-button @click="() => testSignSandboxWithDifferentHeaders()"
              >Test All Headers</ion-button
            >
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- Add Simple Test Section -->
      <ion-grid>
        <ion-row>
          <ion-col size="auto" style="text-align: center">
            <strong>Simple Tests</strong>
            <ion-button @click="() => simpleTest()">Simple Test</ion-button>
            <ion-button @click="() => openSignSandbox()"
              >Open Sign Sandbox</ion-button
            >
            <ion-button @click="() => openSignSandboxSimple()"
              >Open Simple</ion-button
            >
            <ion-button @click="() => openSignSandboxWithCheck()"
              >Open with Check</ion-button
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
import { ToolBarType, BackgroundColor } from "@capgo/inappbrowser";
import { Capacitor } from "@capacitor/core";

const WEB_URL = "https://sign-sandbox.farashenasa.ir/";
const TEST_URLS = {
  simple: "https://example.com",
  google: "https://google.com",
  capgo: "https://capgo.app",
  original: "https://sign-sandbox.farashenasa.ir/",
};

// Keep only the functions that are actually used in the template
async function validateUrl(url: string): Promise<boolean> {
  try {
    await fetch(url, {
      method: "HEAD",
      mode: "no-cors",
    });
    return true;
  } catch (error) {
    console.error(`URL validation failed for ${url}:`, error);
    return false;
  }
}

async function testOriginalUrl() {
  console.log("Testing with original URL");

  try {
    await InAppBrowser.openWebView({
      url: TEST_URLS.original,
      title: "Original URL Test",
      showArrow: true,
      showReloadButton: true,
    });
    console.log("Original URL test successful");
  } catch (error) {
    console.error("Original URL test failed:", error);
  }
}

async function progressiveUrlTesting() {
  console.log("Starting progressive URL testing...");

  const testUrls = [
    { name: "Example.com", url: TEST_URLS.simple },
    { name: "Google.com", url: TEST_URLS.google },
    { name: "Capgo.app", url: TEST_URLS.capgo },
    { name: "Original URL", url: TEST_URLS.original },
  ];

  for (const test of testUrls) {
    console.log(`\n--- Testing: ${test.name} ---`);

    // First check accessibility
    const isAccessible = await validateUrl(test.url);
    console.log(`Accessibility check: ${isAccessible ? "PASS" : "FAIL"}`);

    if (isAccessible) {
      try {
        await InAppBrowser.openWebView({
          url: test.url,
          title: `Test: ${test.name}`,
          showArrow: true,
          showReloadButton: true,
        });

        console.log(`✅ ${test.name} - InAppBrowser SUCCESS`);

        // Wait and close
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await InAppBrowser.close();
      } catch (error) {
        console.error(`❌ ${test.name} - InAppBrowser FAILED:`, error);

        // Try to close if it's open
        try {
          await InAppBrowser.close();
        } catch (closeError) {
          console.log("Could not close browser:", closeError);
        }
      }
    } else {
      console.log(`⏭️ ${test.name} - SKIPPED (not accessible)`);
    }

    // Wait before next test
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log("\n--- Progressive URL testing completed ---");
}

async function getDebugInfo() {
  console.log("=== DEBUG INFO ===");
  console.log("Platform:", Capacitor.getPlatform());
  console.log("Test URLs:", TEST_URLS);

  // Check network connectivity
  try {
    const response = await fetch("https://httpbin.org/get");
    console.log("Network connectivity:", response.ok);
  } catch (error) {
    console.log("Network connectivity failed:", error);
  }

  console.log("=== END DEBUG INFO ===");
}

let listeners: any[] = [];

async function openWebWithPickerMaterial() {
  const picker = await InAppBrowser.openWebView({
    url: "https://sign-sandbox.farashenasa.ir/",
    materialPicker: true,
  });
  console.log("picker", picker);
}

async function openWebWithPickerOld() {
  const picker = await InAppBrowser.openWebView({
    url: "https://sign-sandbox.farashenasa.ir/",
  });
  console.log("picker", picker);
}

async function openWeb() {
  InAppBrowser.openWebView({
    url: WEB_URL,
  });
}

async function openWebDarkMode() {
  // InAppBrowser.open({ url: WEB_URL, isInspectable: true } as any);
  const script =
    "await import('https://unpkg.com/darkreader@4.9.89/darkreader.js');\n" +
    "DarkReader.enable({ brightness: 100, contrast: 90, sepia: 10 });";
  InAppBrowser.openWebView({
    url: WEB_URL,
    isPresentAfterPageLoad: true,
    preShowScript: script,
  });
}

async function openWebWithHeaders() {
  InAppBrowser.openWebView({
    url: "https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending/",
    headers: {
      "Custom-Header": "test-value",
      Authorization: "Bearer test-token",
    },
  });
}

async function openWebWithCredentials() {
  InAppBrowser.openWebView({
    url: "https://testpages.eviltester.com/styled/auth/basic-auth-results.html",
    credentials: {
      username: "authorized",
      password: "password001",
    },
  });
}

async function openWebWithDisclaimer() {
  InAppBrowser.openWebView({
    url: WEB_URL,
    shareSubject: "Share this website",
    shareDisclaimer: {
      title: "Disclaimer",
      message: "This is a test disclaimer",
      confirmBtn: "Accept",
      cancelBtn: "Decline",
    },
  });
}

async function openWebWithCustomButton() {
  InAppBrowser.addListener("buttonNearDoneClick", async (msg) => {
    console.log("buttonNearDoneClick", msg);
    await InAppBrowser.setUrl({ url: "https://google.com" });
  });
  InAppBrowser.openWebView({
    url: WEB_URL,
    buttonNearDone: {
      ios: {
        iconType: "sf-symbol",
        icon: "star.fill",
      },
      android: {
        iconType: "vector",
        icon: "ic_menu_share",
        width: 24,
        height: 24,
      },
    },
  });
}

async function openWebWithCustomButtonSVG() {
  InAppBrowser.addListener("buttonNearDoneClick", async (msg) => {
    console.log("buttonNearDoneClick", msg);
    await InAppBrowser.setUrl({ url: "https://google.com" });
  });
  InAppBrowser.openWebView({
    url: WEB_URL,
    buttonNearDone: {
      ios: {
        iconType: "asset",
        icon: "public/monkey.svg",
      },
      android: {
        iconType: "asset",
        icon: "public/monkey.svg",
        width: 24,
        height: 24,
      },
    },
  });
}

async function openWebWithAllOptions() {
  InAppBrowser.openWebView({
    url: WEB_URL,
    toolbarColor: "#FF5733",
    toolbarTextColor: "#B9FFC6",
    showArrow: true,
    showReloadButton: true,
    closeModal: true,
    closeModalTitle: "Close Window",
    closeModalDescription: "Are you sure you want to close?",
    closeModalOk: "Yes, close",
    closeModalCancel: "No, stay",
    buttonNearDone: {
      ios: {
        iconType: "sf-symbol",
        icon: "star.fill",
      },
      android: {
        iconType: "asset",
        icon: "public/monkey.svg",
        width: 24,
        height: 24,
      },
    },
  });
}

async function openSimple() {
  InAppBrowser.open({ url: WEB_URL });
}

async function openWithOptions() {
  InAppBrowser.open({
    url: WEB_URL,
    isPresentAfterPageLoad: true,
  } as any);
}

async function openWithInspectable() {
  InAppBrowser.open({
    url: WEB_URL,
    isInspectable: true,
  } as any);
}

async function openWithShowArrow() {
  InAppBrowser.openWebView({
    url: WEB_URL,
    showArrow: true,
    title: "Show Arrow Only Test",
  });
}

async function openFlohkids() {
  const options = {
    url: "https://flohkids.de/",
    isAnimated: false,
    toolbarType: ToolBarType.BLANK,
    isPresentAfterPageLoad: true,
    activeNativeNavigationForWebview: true,
    backgroundColor: BackgroundColor.WHITE,
  };
  await InAppBrowser.openWebView(options);
}

const scriptfloatButton = `
       // Create the button element
        const closeBtn = document.createElement('div');
        closeBtn.id = 'capgo-close-btn';

        // Style it as a round red button with white cross
        closeBtn.style.position = 'fixed';
        closeBtn.style.top = '20px';
        closeBtn.style.right = '20px';
        closeBtn.style.width = '40px';
        closeBtn.style.height = '40px';
        closeBtn.style.borderRadius = '50%';
        closeBtn.style.backgroundColor = 'red';
        closeBtn.style.display = 'flex';
        closeBtn.style.justifyContent = 'center';
        closeBtn.style.alignItems = 'center';
        closeBtn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        closeBtn.style.zIndex = '2147483647'; // Maximum z-index value
        closeBtn.style.cursor = 'pointer';

        // Add the cross icon
        closeBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

        // Add click event to close the webview
        closeBtn.addEventListener('click', () => {
          window.mobileApp.close();
        });

        // Add the button to the document root to ensure highest level
        document.documentElement.appendChild(closeBtn);

        // Create a MutationObserver to ensure the button isn't removed
        const observer = new MutationObserver(() => {
          if (!document.getElementById('capgo-close-btn')) {
            document.documentElement.appendChild(closeBtn);
          }
        });

        // Start observing the document for changes
        observer.observe(document.documentElement, {
          childList: true,
          subtree: true
        });
`;
async function openBlankWithCloseButton() {
  await InAppBrowser.openWebView({
    url: WEB_URL,
    toolbarType: ToolBarType.BLANK,
    title: "Blank With Close Button",
  });

  // Wait for page to load before injecting the button
  const listener = await InAppBrowser.addListener(
    "browserPageLoaded",
    async () => {
      // Inject a floating close button in the top right corner
      await InAppBrowser.executeScript({
        code: scriptfloatButton,
      });
      listener.remove();
    }
  );
}


  // Wait for page to load before injecting the button
  const listener = await InAppBrowser.addListener(
    "browserPageLoaded",
    async () => {
      // Inject a floating close button in the top right corner
      await InAppBrowser.executeScript({
        code: scriptfloatButton,
      });
      listener.remove();
    }
  );
}

async function openBlankWithBidirectionalCommunication() {
  // Open the webview with BLANK toolbar
  await InAppBrowser.openWebView({
    url: WEB_URL,
    toolbarType: ToolBarType.BLANK,
    title: "Bidirectional Communication Test",
  });
  // Wait for the page to load, then inject the script for the floating button
  const loadListener = await InAppBrowser.addListener(
    "browserPageLoaded",
    async () => {
      // Inject the script for bidirectional communication
      await InAppBrowser.executeScript({
        code: `
        // Create the button element
        const closeBtn = document.createElement('div');
        closeBtn.id = 'capgo-close-btn';

        // Style it as a round red button with white cross
        closeBtn.style.position = 'fixed';
        closeBtn.style.top = '20px';
        closeBtn.style.right = '20px';
        closeBtn.style.width = '40px';
        closeBtn.style.height = '40px';
        closeBtn.style.borderRadius = '50%';
        closeBtn.style.backgroundColor = 'red';
        closeBtn.style.display = 'flex';
        closeBtn.style.justifyContent = 'center';
        closeBtn.style.alignItems = 'center';
        closeBtn.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        closeBtn.style.zIndex = '2147483647'; // Maximum z-index value
        closeBtn.style.cursor = 'pointer';

        // Add the cross icon
        closeBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

        // Add click event to send close message to the app
        closeBtn.addEventListener('click', () => {
          window.mobileApp.postMessage({ detail: { message: 'close' } });
        });

        // Add the button to the document root
        document.documentElement.appendChild(closeBtn);

        // Function to create and show the confirmation dialog
        function showConfirmDialog(message) {
          // Create modal container
          const modal = document.createElement('div');
          modal.id = 'confirmation-modal';
          modal.style.position = 'fixed';
          modal.style.top = '0';
          modal.style.left = '0';
          modal.style.width = '100%';
          modal.style.height = '100%';
          modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          modal.style.display = 'flex';
          modal.style.justifyContent = 'center';
          modal.style.alignItems = 'center';
          modal.style.zIndex = '2147483646';

          // Create modal content
          const modalContent = document.createElement('div');
          modalContent.style.backgroundColor = 'white';
          modalContent.style.padding = '20px';
          modalContent.style.borderRadius = '8px';
          modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
          modalContent.style.maxWidth = '300px';
          modalContent.style.textAlign = 'center';

          // Add message
          const messageEl = document.createElement('p');
          messageEl.textContent = message;
          messageEl.style.marginBottom = '20px';

          // Create buttons container
          const buttonContainer = document.createElement('div');
          buttonContainer.style.display = 'flex';
          buttonContainer.style.justifyContent = 'center';
          buttonContainer.style.gap = '10px';

          // Create Yes button
          const yesButton = document.createElement('button');
          yesButton.textContent = 'Yes';
          yesButton.style.padding = '8px 16px';
          yesButton.style.backgroundColor = 'red';
          yesButton.style.color = 'white';
          yesButton.style.border = 'none';
          yesButton.style.borderRadius = '4px';
          yesButton.style.cursor = 'pointer';

          // Create No button
          const noButton = document.createElement('button');
          noButton.textContent = 'No';
          noButton.style.padding = '8px 16px';
          noButton.style.backgroundColor = '#ccc';
          noButton.style.color = 'black';
          noButton.style.border = 'none';
          noButton.style.borderRadius = '4px';
          noButton.style.cursor = 'pointer';

          // Add event listeners to buttons
          yesButton.addEventListener('click', () => {
            document.body.removeChild(modal);
            window.mobileApp.postMessage({ detail: { message: 'closeConfirmed' } });
          });

          noButton.addEventListener('click', () => {
            document.body.removeChild(modal);
          });

          // Assemble the modal
          buttonContainer.appendChild(noButton);
          buttonContainer.appendChild(yesButton);
          modalContent.appendChild(messageEl);
          modalContent.appendChild(buttonContainer);
          modal.appendChild(modalContent);

          // Add to document
          document.body.appendChild(modal);
        }

        // Create a MutationObserver to ensure the button isn't removed
        const observer = new MutationObserver(() => {
          if (!document.getElementById('capgo-close-btn')) {
            document.documentElement.appendChild(closeBtn);
          }
        });

        // Start observing the document for changes
        observer.observe(document.documentElement, {
          childList: true,
          subtree: true
        });

        // Listen for messages from the native app - FIXED
        window.addEventListener("messageFromNative", (event) => {
          if (event && event.detail && event.detail.action === 'confirmClose') {
            showConfirmDialog(event.detail.message);
          }
        });
      `,
      });
      loadListener.remove();
    }
  );
}

async function openDeepLinkTest() {
  InAppBrowser.openWebView({
    url: "https://aasa-tester.capgo.app/",
    title: "Deep Link Test",
  });
}

async function openDeepLinkTestPrevent() {
  InAppBrowser.openWebView({
    url: "https://aasa-tester.capgo.app/",
    title: "Deep Link Test (Prevent)",
    preventDeeplink: true,
  });
}

async function openBrokenUrlWithButton() {
  InAppBrowser.addListener("buttonNearDoneClick", async (msg) => {
    console.log("buttonNearDoneClick on broken URL", msg);
    // Try to navigate to a working URL to test button doesn't crash
    await InAppBrowser.setUrl({ url: "https://google.com" });
  });

  InAppBrowser.addListener("pageLoadError", () => {
    console.log("Page load error for broken URL");
  });

  InAppBrowser.openWebView({
    url: "https://this-is-a-broken-url-that-does-not-exist.invalid",
    title: "Broken URL Test",
    buttonNearDone: {
      ios: {
        iconType: "sf-symbol",
        icon: "arrow.clockwise",
      },
      android: {
        iconType: "vector",
        icon: "ic_menu_rotate",
        width: 24,
        height: 24,
      },
    },
  });
}

// Add these functions to handle headers and X-Frame-Options
async function openSignSandboxWithHeaders() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening with custom headers:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Sign Sandbox",
      showArrow: true,
      showReloadButton: true,
      // Add custom headers to bypass X-Frame-Options
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        DNT: "1",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Cache-Control": "max-age=0",
      },
      // Add these options for better compatibility
      activeNativeNavigationForWebview: true,
      disableGoBackOnNativeApplication: false,
      isInspectable: true,
      isPresentAfterPageLoad: true,
    });
    console.log("Sign Sandbox opened with headers successfully");
  } catch (error) {
    console.error("Failed to open with headers:", error);
  }
}

async function openSignSandboxWithMobileHeaders() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening with mobile headers:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Sign Sandbox Mobile",
      showArrow: true,
      showReloadButton: true,
      // Mobile-specific headers
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "X-Requested-With": "XMLHttpRequest",
        "X-Frame-Options": "SAMEORIGIN",
        "X-Content-Type-Options": "nosniff",
        Referer: "https://sign-sandbox.farashenasa.ir/",
        Origin: "https://sign-sandbox.farashenasa.ir",
      },
    });
    console.log("Sign Sandbox opened with mobile headers successfully");
  } catch (error) {
    console.error("Failed to open with mobile headers:", error);
  }
}

async function openSignSandboxWithBypassHeaders() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening with bypass headers:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Sign Sandbox Bypass",
      showArrow: true,
      showReloadButton: true,
      // Headers to bypass X-Frame-Options restrictions
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
      },
    });
    console.log("Sign Sandbox opened with bypass headers successfully");
  } catch (error) {
    console.error("Failed to open with bypass headers:", error);
  }
}

// Add a function to test different header combinations
async function testSignSandboxWithDifferentHeaders() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Testing different header combinations for:", targetUrl);

  const headerConfigs = [
    {
      name: "Default Headers",
      headers: {},
    },
    {
      name: "Mobile Headers",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
      },
    },
    {
      name: "Desktop Headers",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    },
    {
      name: "Bypass Headers",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    },
  ];

  for (const config of headerConfigs) {
    console.log(`\n--- Testing: ${config.name} ---`);

    try {
      await InAppBrowser.openWebView({
        url: targetUrl,
        title: `Test: ${config.name}`,
        showArrow: true,
        showReloadButton: true,
        headers: config.headers,
      });

      console.log(`✅ ${config.name} - SUCCESS`);

      // Wait and close
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await InAppBrowser.close();
    } catch (error) {
      console.error(`❌ ${config.name} - FAILED:`, error);

      // Try to close if it's open
      try {
        await InAppBrowser.close();
      } catch (closeError) {
        console.log("Could not close browser:", closeError);
      }
    }

    // Wait before next test
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log("\n--- Header testing completed ---");
}

async function testSignSandbox() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Testing Sign Sandbox:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Sign Sandbox Test",
      showArrow: true,
      showReloadButton: true,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
      },
    });
    console.log("Sign Sandbox test successful");
  } catch (error) {
    console.error("Sign Sandbox test failed:", error);
  }
}

async function testSignSandboxSimple() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Simple test for:", targetUrl);

  try {
    await InAppBrowser.open({ url: targetUrl });
    console.log("Simple test successful");
  } catch (error) {
    console.error("Simple test failed:", error);
  }
}

async function testDefaultHeaders() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Testing with default headers");

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Default Headers Test",
      showArrow: true,
      showReloadButton: true,
    });
    console.log("Default headers test successful");
  } catch (error) {
    console.error("Default headers test failed:", error);
  }
}

async function testMobileHeaders() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Testing with mobile headers");

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Mobile Headers Test",
      showArrow: true,
      showReloadButton: true,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
      },
    });
    console.log("Mobile headers test successful");
  } catch (error) {
    console.error("Mobile headers test failed:", error);
  }
}

async function testDesktopHeaders() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Testing with desktop headers");

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Desktop Headers Test",
      showArrow: true,
      showReloadButton: true,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
    console.log("Desktop headers test successful");
  } catch (error) {
    console.error("Desktop headers test failed:", error);
  }
}

async function testBypassHeaders() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Testing with bypass headers");

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Bypass Headers Test",
      showArrow: true,
      showReloadButton: true,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });
    console.log("Bypass headers test successful");
  } catch (error) {
    console.error("Bypass headers test failed:", error);
  }
}

async function testWithErrorHandling() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Testing with error handling:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Error Handling Test",
      showArrow: true,
      showReloadButton: true,
    });

    console.log("Test successful");

    // Add listeners for debugging
    const errorListener = await InAppBrowser.addListener(
      "pageLoadError",
      (error) => {
        console.error("Page load error:", error);
      }
    );

    const loadListener = await InAppBrowser.addListener(
      "browserPageLoaded",
      () => {
        console.log("Page loaded successfully");
      }
    );

    // Store listeners
    listeners.push(errorListener, loadListener);
  } catch (error) {
    console.error("Test failed:", error);
  }
}

async function openInExternalBrowser() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening in external browser:", targetUrl);

  try {
    // Use window.open as fallback if Browser plugin not available
    if (typeof window !== "undefined" && window.open) {
      window.open(targetUrl, "_blank");
      console.log("Opened in external browser successfully");
    } else {
      console.log("External browser not available");
    }
  } catch (error) {
    console.error("Failed to open in external browser:", error);
  }
}

async function openInNewTab() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening in new tab:", targetUrl);

  try {
    // Create a link and click it
    const link = document.createElement("a");
    link.href = targetUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Opened in new tab successfully");
  } catch (error) {
    console.error("Failed to open in new tab:", error);
  }
}

async function testWithExample() {
  console.log("Testing with Example HTTPS URL");

  try {
    await InAppBrowser.openWebView({
      url: TEST_URLS.simple,
      title: "Example HTTPS Test",
      showArrow: true,
      showReloadButton: true,
    });
    console.log("Example URL test successful");
  } catch (error) {
    console.error("Example URL test failed:", error);
  }
}

async function testWithGoogle() {
  console.log("Testing with Google HTTPS URL");

  try {
    await InAppBrowser.openWebView({
      url: TEST_URLS.google,
      title: "Google HTTPS Test",
      showArrow: true,
      showReloadButton: true,
    });
    console.log("Google URL test successful");
  } catch (error) {
    console.error("Google URL test failed:", error);
  }
}

async function testUrlWithAccessibilityCheck() {
  const url = TEST_URLS.original;
  console.log(`Validating URL: ${url}`);

  const isValid = await validateUrl(url);
  if (isValid) {
    console.log("URL is accessible, testing in InAppBrowser...");
    await testOriginalUrl();
  } else {
    console.log("URL is not accessible, trying alternative...");
    await InAppBrowser.openWebView({
      url: TEST_URLS.capgo,
      title: "Capgo Test",
    });
  }
}

async function simpleTest() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Simple test for:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Simple Test",
    });
    console.log("Simple test successful");
  } catch (error) {
    console.error("Simple test failed:", error);
  }
}

async function openSignSandbox() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening:", targetUrl);

  try {
    await InAppBrowser.openWebView({
      url: targetUrl,
      title: "Sign Sandbox",
      showArrow: true,
      showReloadButton: true,
      // Add these options for better compatibility
      activeNativeNavigationForWebview: true,
      disableGoBackOnNativeApplication: false,
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

async function openSignSandboxSimple() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening simple:", targetUrl);

  try {
    await InAppBrowser.open({ url: targetUrl });
    console.log("Sign Sandbox opened successfully (simple)");
  } catch (error) {
    console.error("Failed to open Sign Sandbox (simple):", error);
  }
}

async function openSignSandboxWithCheck() {
  const targetUrl = "https://sign-sandbox.farashenasa.ir/";
  console.log("Opening with check:", targetUrl);

  const isAccessible = await validateUrl(targetUrl);

  if (isAccessible) {
    console.log("URL is accessible, opening in InAppBrowser...");
    await openSignSandbox();
  } else {
    console.log("URL is not accessible, trying alternative method...");
    await openSignSandboxSimple();
  }
}

onMounted(async () => {
  console.log("mounted");
  await getDebugInfo();

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
