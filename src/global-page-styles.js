import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {},
    "index": {},
    "starter": {},
    "uam": {},
    "dlp": {},
    "features": {},
    "features/live-employee-desktop": {},
    "features/employee-internet-monitoring": {},
    "features/e-mail-monitoring": {},
    "features/keystroke-monitoring": {},
    "features/file-activity-monitoring-software": {},
    "features/printed-document-tracking": {},
    "features/optical-character-recognition-ocr": {},
    "features/smart-rules-and-alerts": {},
    "features/employee-productivity-tracking": {},
    "features/network-monitoring": {},
    "features/application-usage-monitoring": {},
    "features/instant-message-monitoring": {},
    "features/remote-desktop-control": {},
    "features/active-vs-idle-time-analysis": {},
    "features/linux-terminal-capture": {},
    "features/nonproductive-activity-reporting": {},
    "features/custom-reports": {},
    "features/session-recording-and-metadata": {},
    "insider-threat-detection-and-prevention": {},
    "solutions": {},
    "remote-employee-monitoring": {},
    "privileged-user-monitoring": {},
    "productivity-optimization": {},
    "third-party-vendor-management": {},
    "compliance-management-auditing-and-monitoring": {},
    "gdpr-compliance": {},
    "for-hipaa": {},
    "for-legal": {},
    "government-and-public-sector-cyber-security": {},
    "pci-dss-compliance-and-certification": {},
    "iso-27001-compliance": {},
    "energy-and-utilities-sector-cyber-security": {},
    "for-financial-sector": {},
    "retail-and-ecommerce-cyber-security": {},
    "about-us": {},
    "why-us": {},
    "partners": {},
    "white-papers": {},
    "support": {},
    "pricing": {},
    "request-demo": {},
    "leadership": {},
    "purchase": {},
    "features/user-card": {},
    "features/screen-capture": {},
    "features/webcam-snapshots": {},
    "features/usb-device-control": {},
    "features/dlp-features": {},
    "features/voice-communication-recording": {},
    "features/file-scanner": {},
    "features/software-and-hardware-inventory": {},
    "demo-request": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
