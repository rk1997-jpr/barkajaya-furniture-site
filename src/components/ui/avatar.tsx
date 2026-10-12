import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

type AvatarRootProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
export const Avatar = React.forwardRef<HTMLSpanElement, AvatarRootProps>(
  function Avatar(props, ref) {
    return (
      <AvatarPrimitive.Root
        ref={ref}
        className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", props.className)}
        {...props}
      />
    );
  }
);
Avatar.displayName = "Avatar";

type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  function AvatarImage(props, ref) {
    return (
      <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", props.className)}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = "AvatarImage";

type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;
export const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  function AvatarFallback(props, ref) {
    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", props.className)}
        {...props}
      />
    );
  }
);
AvatarFallback.displayName = "AvatarFallback";