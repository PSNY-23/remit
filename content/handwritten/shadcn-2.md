# List of components that are like open / dropdown on click / hover

* Accordion
* Alert Dialog
* Alert
* Breadcrumb
* Card
* Carousel
* Chart
* Checkbox
* Command
* Dialog
* Drawer
* Dropdown Menu
* Field
* Form
* HoverCard
* Input Group
* Input OTP
* Input
* Menubar
* Navigation Menu
* Pagination
* Popover
* Progress

*(Other components listed in margin: RadioGroup, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner)*

---

# ① Components that is only for UI :-
*(Crossed out: Label, Aspect Ratio, Separator, Avatar, Text, Badge, Card)*

**Alert** -> Just render text in red color
↳ `AlertTitle`
↳ `AlertDescription`

# ② AspectRatio
```jsx
<AspectRatio ratio={16/9}>
   <img />
</AspectRatio>
```
Just a div with AR

# ③ Avatar
```jsx
<Avatar>
   <AvatarImage src="" alt />
   <AvatarFallback> CN </AvatarFallback>
</Avatar>
```

# ④ Button Group
-> Just to make a group of button with consistent styling.
```jsx
<ButtonGroup>
   <Button> 1 </Button>
   <Button> 2 </Button>
</ButtonGroup>
```

# ⑤ Calendar
`<Calendar>`

# ⑥ Card
`<Card>` -> Just gives you a card like feel

# ⑦ CheckBox
`<CheckBox>` -> Just render a check box -> used with a label

# ⑧ combobox
`<combobox>` -> It's just a name -> There is no component like combobox

---

# ⑭ Menubar
↳ A bar where there are multiple menus in a bar like & when you hover over them you see a list of actionable buttons/controls.

**Diagram:**
`[File] [Edit] [Profiles]`
*File drops down to:*
* New Tab (⌘T)
* New Window (⌘N)
* *(Separator)*
* Share -> (Email link, Message, Notes)

```jsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      {/* other MenubarItems */}
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Email Link</MenubarItem>
          <MenubarItem>Message</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

---

# ⑮ Navigation Menu
↳ It's perfect for headers with complex/rich feature.

**Diagram:**
`Home v | Components v | Docs | List v | Simple v | With Icon v`
-> on hover it will show all the feature of Home in a dropdown like

---

# ⑯ Pagination :-
`<Previous   1  [2]  3  ...   Next>`

```jsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem> <PaginationLink> 1 </PaginationLink> </PaginationItem>
    <PaginationItem> <PaginationLink> 2 </PaginationLink> </PaginationItem>
    <PaginationItem> <PaginationLink> 3 </PaginationLink> </PaginationItem>
    <PaginationItem> <PaginationEllipsis /> </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

---

# ⑰ Popover :-
```jsx
<Popover>
  <PopoverTrigger asChild>
    <Button> Open Popover </Button>
  </PopoverTrigger>
  <PopoverContent>
     {/* Put whatever you like here input, form, text etc */}
  </PopoverContent>
</Popover>
```

---

# ⑱ RadioGroup :-
**Diagram:**
`O item 1`
`O item 2`
`O item 3`

```jsx
<RadioGroup>
  <div>
     <RadioGroupItem value="1" id="r1" />
     <Label htmlFor="r1"> item 1 </Label>
  </div>
  <div></div>
  <div></div>
</RadioGroup>
```

---

# ⑲ ScrollArea :-
```jsx
<ScrollArea className="h-72 w-48 rounded-md ">
   <div className="p-4"> Items List </div>
   {items.map((item) => (
       <div key={item}> {item} </div>
       <Separator />
   ))}
</ScrollArea>
```

---

# ⑳ Select :-
List of option to pick from - triggered by a button.

**Diagram:**
`[ fruits v ]`

```jsx
<Select>
  <SelectTrigger>
     <SelectValue placeholder="fruits" />
  </SelectTrigger>
  <SelectContent>
     <SelectGroup>
        <SelectItem value="apple"> Apple </SelectItem>
        <SelectItem value="oat"> Oat </SelectItem>
        {/* ... */}
     </SelectGroup>
  </SelectContent>
</Select>
```

---

# ㉑ Sheet :-
↳ Just like dialog.
