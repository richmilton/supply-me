import { TitleBar } from "@shopify/app-bridge-react";

export default function AdditionalPage() {
    return (
        <s-page>
            <TitleBar title="Additional page"></TitleBar>
            <s-section heading="Multiple pages">
                <s-paragraph>
                    Ploppy - son of ploppy
                </s-paragraph>
                <s-paragraph>
                    To create your own page and have it show up in the app navigation, add
                    a page inside <code>app/routes</code>, and a link to it in the{" "}
                    <code>&lt;NavMenu&gt;</code> component found in{" "}
                    <code>app/routes/app.tsx</code>.
                </s-paragraph>
            </s-section>
        </s-page>
    );
}
