import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

export const NavigationMenu = NavigationMenuPrimitive.Root;

type ListProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.List
>;
export const NavigationMenuList = React.forwardRef<HTMLUListElement, ListProps>(
  function NavigationMenuList(props, ref) {
    return (
      <NavigationMenuPrimitive.List
        ref={ref}
        className={cn(
          "flex flex-1 list-none items-center justify-center space-x-1",
          props.className
        )}
        {...props}
      />
    );
  }
);
NavigationMenuList.displayName = "NavigationMenuList";

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

type TriggerProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Trigger
>;
export const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  function NavigationMenuTrigger(props, ref) {
    return (
      <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(
          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
          props.className
        )}
        {...props}
      />
    );
  }
);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

type ContentProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Content
>;
export const NavigationMenuContent = React.forwardRef<HTMLDivElement, ContentProps>(
  function NavigationMenuContent(props, ref) {
    return (
      <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
          "left-0 top-0 w-full md:absolute md:w-auto",
          props.className
        )}
        {...props}
      />
    );
  }
);
NavigationMenuContent.displayName = "NavigationMenuContent";

export const NavigationMenuLink = NavigationMenuPrimitive.Link;

type ViewportProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Viewport
>;
export const NavigationMenuViewport = React.forwardRef<HTMLDivElement, ViewportProps>(
  function NavigationMenuViewport(props, ref) {
    return (
      <div className={cn("absolute left-0 top-full flex justify-center")}>
        <NavigationMenuPrimitive.Viewport
          className={cn(
            "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]",
            props.className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
NavigationMenuViewport.displayName = "NavigationMenuViewport";