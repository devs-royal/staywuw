// Function to detect iOS devices
export function isIOS() {
    return (
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    );
}

// Function to enable/disable scrolling for iOS
export function toggleIOSScroll(enable) {
    if (isIOS()) {
        document.body.style.overflow = enable ? '' : 'hidden';
    }
}

