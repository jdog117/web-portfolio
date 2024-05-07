"use client";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { InlineWidget } from "react-calendly";

export default function Book() {
    return (
        <>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button className="fixed bottom-0 right-0 p-6 md:px-10 md:py-7 z-10 m-8 md:m-16 rounded-full">
                        Let{`'`}s talk!
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <InlineWidget
                        styles={{ height: "70vh" }}
                        url="https://calendly.com/jspcasey"
                    />
                    <DrawerFooter className="items-center">
                        <DrawerClose asChild>
                            <Button variant="outline" className="w-min ">
                                Close
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
