import type { CourseContent } from './types'

/**
 * TypeScript 进阶课程（3 章）
 *
 * TS 代码通过 TsWasmRunner 转译为 JS 后在 iframe 中执行。
 * 类型错误不阻断运行（仅 Monaco 编辑器侧提示），console.log 输出被捕获为 stdout。
 */
export const typescriptCourse: CourseContent = {
  id: 'course-typescript',
  slug: 'typescript',
  title: 'TypeScript 进阶',
  description: '在 JavaScript 基础上学习 TypeScript 类型系统：类型注解、泛型、类型守卫与工具类型。',
  language: 'typescript',
  difficulty: 'intermediate',
  chapters: [
    {
      id: 'ts-ch1',
      title: '类型注解与接口',
      order: 0,
      lessons: [
        {
          id: 'ts-ch1-l1',
          title: '基本类型注解',
          order: 0,
          content_md:
            'TypeScript 在变量、参数和返回值后加 `: 类型` 进行类型标注。' +
            '基本类型：`string`、`number`、`boolean`。' +
            '类型注解帮助在编写时发现错误，编译后会被擦除。',
          example_code:
            'function greet(name: string): string {\n  return "你好, " + name\n}\nconst age: number = 25\nconst isActive: boolean = true\nconsole.log(greet("TypeScript"))\nconsole.log(age, isActive)',
          exercise: {
            prompt: '写一个函数 double，接收参数 n 类型为 number，返回 n * 2。调用 double(21) 并输出结果。',
            starter_code:
              'function double(n: ___): number {\n  return n * 2\n}\nconsole.log(double(21))',
            expected_output: '42',
          },
        },
        {
          id: 'ts-ch1-l2',
          title: '接口',
          order: 1,
          content_md:
            '`interface` 定义对象的形状契约，描述属性名与类型。' +
            '函数参数使用接口类型后，传入的对象必须满足该结构。' +
            '可选属性用 `?` 标记。',
          example_code:
            'interface User {\n  name: string\n  age: number\n  email?: string\n}\nfunction showUser(u: User): string {\n  return u.name + ", " + u.age + "岁"\n}\nconsole.log(showUser({ name: "小明", age: 20 }))',
          exercise: {
            prompt: '定义接口 Point，含 x 和 y 两个 number 属性。写函数 sum 返回 x + y。' +
              '调用 sum({ x: 3, y: 5 }) 输出结果。',
            starter_code:
              'interface Point {\n  x: number\n  y: number\n}\nfunction sum(p: ___): number {\n  return p.x + p.y\n}\nconsole.log(sum({ x: 3, y: 5 }))',
            expected_output: '8',
          },
        },
      ],
    },
    {
      id: 'ts-ch2',
      title: '泛型与联合类型',
      order: 1,
      lessons: [
        {
          id: 'ts-ch2-l1',
          title: '联合类型与交叉类型',
          order: 0,
          content_md:
            '联合类型 `A | B` 表示值可以是 A 或 B 类型。' +
            '交叉类型 `A & B` 把多个类型合并为一个，同时拥有所有属性。' +
            '联合类型配合类型守卫可以安全处理多种情况。',
          example_code:
            'type StringOrNum = string | number\nfunction format(v: StringOrNum): string {\n  return "值: " + v\n}\nconsole.log(format("hello"))\nconsole.log(format(42))',
          exercise: {
            prompt: '定义联合类型 ID = string | number。写函数 getId 返回传入的 id。' +
              '调用 getId(100) 输出结果。',
            starter_code:
              'type ID = string | number\nfunction getId(id: ___): ID {\n  return id\n}\nconsole.log(getId(100))',
            expected_output: '100',
          },
        },
        {
          id: 'ts-ch2-l2',
          title: '泛型基础',
          order: 1,
          content_md:
            '泛型用 `<T>` 定义类型参数，让函数和接口适配多种类型。' +
            '调用时传入具体类型（或由 TS 推断），保持类型安全的同时实现复用。' +
            '泛型常用于容器、工具函数。',
          example_code:
            'function first<T>(arr: T[]): T | undefined {\n  return arr[0]\n}\nconsole.log(first([1, 2, 3]))\nconsole.log(first(["a", "b"]))',
          exercise: {
            prompt: '写泛型函数 wrap，接收 value: T，返回 [value]（单元素数组）。' +
              '调用 wrap("test") 输出结果。',
            starter_code:
              'function wrap<T>(value: T): T[] {\n  return ___\n}\nconsole.log(wrap("test"))',
            expected_output: '[ "test" ]',
          },
        },
      ],
    },
    {
      id: 'ts-ch3',
      title: '类型守卫与工具类型',
      order: 2,
      lessons: [
        {
          id: 'ts-ch3-l1',
          title: '类型守卫',
          order: 0,
          content_md:
            '类型守卫在运行时检查类型，让 TS 在分支内收窄类型。' +
            '`typeof` 用于基本类型，`instanceof` 用于类实例，' +
            '`in` 检查属性是否存在。配合联合类型实现安全的分支逻辑。',
          example_code:
            'function process(v: string | number): string {\n  if (typeof v === "string") {\n    return v.toUpperCase()\n  }\n  return v.toFixed(2)\n}\nconsole.log(process("hello"))\nconsole.log(process(3.14159))',
          exercise: {
            prompt: '写函数 describe，参数为 string | number。如果是 string 返回 "文字"，' +
              '如果是 number 返回 "数字"。调用 describe(42) 输出结果。',
            starter_code:
              'function describe(v: string | number): string {\n  if (typeof v === "string") {\n    return "文字"\n  }\n  return ___\n}\nconsole.log(describe(42))',
            expected_output: '数字',
          },
        },
        {
          id: 'ts-ch3-l2',
          title: '工具类型',
          order: 1,
          content_md:
            'TS 内置工具类型：`Partial<T>` 所有属性变可选，' +
            '`Pick<T, Keys>` 选取部分属性，`Omit<T, Keys>` 排除属性，' +
            '`Record<K, V>` 构造键值对类型。灵活组合可减少重复定义。',
          example_code:
            'interface Todo {\n  title: string\n  done: boolean\n}\nfunction update(todo: Todo, patch: Partial<Todo>): Todo {\n  return { ...todo, ...patch }\n}\nconst t: Todo = { title: "学习", done: false }\nconsole.log(update(t, { done: true }))',
          exercise: {
            prompt: '用 Pick 从接口 User 中选取 "name" 属性，创建类型 UserName。' +
              '声明 const n: UserName = { name: "张三" }，输出 n.name。',
            starter_code:
              'interface User {\n  name: string\n  age: number\n}\ntype UserName = Pick<User, "name">\nconst n: UserName = { name: "张三" }\nconsole.log(n.___)',
            expected_output: '张三',
          },
        },
      ],
    },
  ],
}
