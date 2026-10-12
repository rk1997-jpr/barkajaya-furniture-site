import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

type OverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;
export const DialogOverlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  function DialogOverlay(props, ref) {
    return (
      <DialogPrimitive.Overlay
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity",
          props.className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
DialogOverlay.displayName = "DialogOverlay";

type ContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;
export const DialogContent = React.forwardRef<HTMLDivElement, ContentProps>(
  function DialogContent(props, ref) {
    return (
      <DialogPrimitive.Content
        className={cn(
          "fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-background p-6 shadow-lg focus:outline-none",
          props.className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
DialogContent.displayName = "DialogContent";

export const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

type TitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;
export const DialogTitle = React.forwardRef<HTMLHeadingElement, TitleProps>(
  function DialogTitle(props, ref) {
    return (
      <DialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold leading-none tracking-tight", props.className)}
        {...props}
      />
    );
  }
);
DialogTitle.displayName = "DialogTitle";

type DescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;
export const DialogDescription = React.forwardRef<HTMLParagraphElement, DescriptionProps>(
  function DialogDescription(props, ref) {
    return (
      <DialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", props.className)}
        {...props}
      />
    );
  }
);
DialogDescription.displayName = "DialogDescription";

export const DialogClose = DialogPrimitive.Close;