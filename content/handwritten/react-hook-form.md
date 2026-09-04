# React-hook-form

## Page 1: Basics of react-hook-form

```javascript
import { useForm, SubmitHandler } from 'react-hook-form';

type InputType = { 
    example: string, 
    exampleRequired: string; 
}

const { register, handleSubmit, watch, formState: { errors } } = useForm<InputType>()
// (Arrow from handleSubmit): This will validate input before invoking onSubmit

const onSubmit: SubmitHandler<InputType> = (data) => console.log(data);

console.log(watch("example"));
```

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue="test" {...register("example")} />
    <input {...register("exampleRequired", {required: true})} />
    
    {errors.exampleRequired && <p> This field is required </p>}
    
    <input type='submit' />
</form>
```

* (1) To create a form, define the form input type.
* (2) `useForm<InputType>()`
* (3) This hook returns:
  ```javascript
  { register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<InputType>()
  ```
* (4) Define a handle function:
  ```javascript
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);
  ```

---

## Page 2: Validation and UI Libraries

* (5) Provide that handler fn in form :-
  ```jsx
  <form onSubmit={handleSubmit(onSubmit)}> </form>
  ```

* (6) Define input items :-
  ```jsx
  <div>
      <label htmlFor="username"> Username </label>
      <input {...register("username", {required: "Username is required"})} />
      
      {errors.username && <p>{errors.username.message}</p>}
  </div>
  ```

* **List of validation rules supported :-**
  * `① required, min, max, length, pattern, validate.`
  * `<input {...register("name", {required: true, maxLength: 30})} />`
  * `pattern: ""`
  * `min: 18, max: 99`

* **Integrating with UI libraries :-**
  * `-> useForm()` gives you another thing called `Controller` & you define default value in the useForm.
  * `-> const { control, handleSubmit } = useForm({ defaultValues: { firstName: "", lastName: "" } });`
  
  ```jsx
  <form onSubmit={handleSubmit(onSubmit)}>
      <Controller name="firstName"
          control={control}
          render={({field}) => <InputComponent {...field} />} 
          // (Arrow points from <InputComponent> to "from UI library")
      />
  </form>
  ```

---

## Page 3: Shadcn & React-hook-form

* **Shadcn & React-hook-form :-**

* (1) first define formSchema using Zod :-
  ```javascript
  const formSchema = z.object({
      title: z.string()
          .min(5, "Title must be at least 5")
          .max(32, "Title can't be more than 32"),
      description: z.string()
          .min(20, "...")
          .max(300, "...")
  });
  ```
  *(Side annotation: "ये काम करता है formSchema का, form का type देता और value को validate करता" - This works as formSchema, gives type of form and validates the value)*

* (2) `export const PostForm = () => {`
  ```javascript
      const form = useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: {}
      });
  ```
  * *(Arrow from `z.infer<typeof formSchema>`)*: `giving types to form`
  * *(Arrow from `zodResolver(formSchema)`)*: `giving rule to form for validation`

* (3) Creating form :-
  ```jsx
  <Card>
      <CardHeader>
          <CardTitle> Create Post Form </CardTitle>
          <CardDescription> _________ </CardDescription>
      </CardHeader>
      <CardContent>
          <Form></Form>
      </CardContent>
      <CardFooter>
          Reset & Submit button
      </CardFooter>
  </Card>
  ```

---

## Page 4: Logics & Forms Structure

* (4) logics & forms :-
  ```jsx
  <CardContent>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
              <Controller />
          </FieldGroup>
          <FieldItem />
      </Form>
  </CardContent>
  ```

* `=>` Shadcn UI form exports following property :-
  * `Form, useFormField => <Form>` (Controller for logics)
  * `FormItem`
  * `FormField`
  
  *(Hierarchy block)*:
  * `<FormField name="username">`
  * `<FormItem>` -> UI only
    * `<FormLabel>` -> UI only
    * `<FormDescription>` -> UI only
    * `<FormControl>`
    * `<FormMessage>`
    * *(Arrow: Remains at same level of hierarchy)*

* (1) `Form =>` This wraps whole form & Provides all things.
* (2) `FormField =>` `<FormField name="username">`
* (3) Inside `<FormField>` we have 4 fields that remains at same level.
  * `<FormLabel> =>` user sees this label.
  * `<FormDescription> =>` 
  * `<FormControl> =>` Wraps actual input/form element, the field value will be tied & controlled here.
    ```jsx
    <FormControl>
        <input {...register("username", {required: "username required"})} />
    </FormControl>
    ```
  * `<FormMessage> =>` If there is any error in this form field.
    ```jsx
    <FormMessage>
        {errors.username && <span>{errors.username.message}</span>}
    </FormMessage>
    ```

---

## Page 5: Best Pattern

* (5) Best Pattern :-
  ```javascript
  const registerSchema = z.object({
      name: z.string().min(1, "Name is required")
  });
  
  type RegisterFormValues = z.infer<typeof registerSchema>;
  
  const form = useForm<RegisterFormValues>({
      resolver: zodResolver(registerSchema),
      defaultValues: { name: "" }
  });
  
  const { handleSubmit, formState, control } = form;
  ```

  ```jsx
  <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <FormField /> {/* for name, email, Password etc */}
          
          <FormField name='email'
              control={control}
              render={({field}) => (
                  <FormItem>
                      <FormLabel htmlFor="name"> Full Name </FormLabel>
                      <FormControl>
                          <Input id="name" {...field} />
                      </FormControl>
                      {formState.errors.email && (
                          <FormMessage> ... </FormMessage>
                      )}
                  </FormItem>
              )}
          />
      </form>
  </Form>
  ```
