
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model detailSeller
 * 
 */
export type detailSeller = $Result.DefaultSelection<Prisma.$detailSellerPayload>
/**
 * Model blog
 * 
 */
export type blog = $Result.DefaultSelection<Prisma.$blogPayload>
/**
 * Model comment
 * 
 */
export type comment = $Result.DefaultSelection<Prisma.$commentPayload>
/**
 * Model item
 * 
 */
export type item = $Result.DefaultSelection<Prisma.$itemPayload>
/**
 * Model itemImage
 * 
 */
export type itemImage = $Result.DefaultSelection<Prisma.$itemImagePayload>
/**
 * Model itemCategory
 * 
 */
export type itemCategory = $Result.DefaultSelection<Prisma.$itemCategoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.detailSeller`: Exposes CRUD operations for the **detailSeller** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailSellers
    * const detailSellers = await prisma.detailSeller.findMany()
    * ```
    */
  get detailSeller(): Prisma.detailSellerDelegate<ExtArgs>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.blogDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.commentDelegate<ExtArgs>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.itemDelegate<ExtArgs>;

  /**
   * `prisma.itemImage`: Exposes CRUD operations for the **itemImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemImages
    * const itemImages = await prisma.itemImage.findMany()
    * ```
    */
  get itemImage(): Prisma.itemImageDelegate<ExtArgs>;

  /**
   * `prisma.itemCategory`: Exposes CRUD operations for the **itemCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemCategories
    * const itemCategories = await prisma.itemCategory.findMany()
    * ```
    */
  get itemCategory(): Prisma.itemCategoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.1
   * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    role: 'role',
    user: 'user',
    detailSeller: 'detailSeller',
    blog: 'blog',
    comment: 'comment',
    item: 'item',
    itemImage: 'itemImage',
    itemCategory: 'itemCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'role' | 'user' | 'detailSeller' | 'blog' | 'comment' | 'item' | 'itemImage' | 'itemCategory'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      detailSeller: {
        payload: Prisma.$detailSellerPayload<ExtArgs>
        fields: Prisma.detailSellerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detailSellerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$detailSellerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detailSellerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$detailSellerPayload>
          }
          findFirst: {
            args: Prisma.detailSellerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$detailSellerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detailSellerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$detailSellerPayload>
          }
          findMany: {
            args: Prisma.detailSellerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$detailSellerPayload>[]
          }
          create: {
            args: Prisma.detailSellerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$detailSellerPayload>
          }
          createMany: {
            args: Prisma.detailSellerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.detailSellerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$detailSellerPayload>
          }
          update: {
            args: Prisma.detailSellerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$detailSellerPayload>
          }
          deleteMany: {
            args: Prisma.detailSellerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.detailSellerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.detailSellerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$detailSellerPayload>
          }
          aggregate: {
            args: Prisma.DetailSellerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDetailSeller>
          }
          groupBy: {
            args: Prisma.detailSellerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DetailSellerGroupByOutputType>[]
          }
          count: {
            args: Prisma.detailSellerCountArgs<ExtArgs>,
            result: $Utils.Optional<DetailSellerCountAggregateOutputType> | number
          }
        }
      }
      blog: {
        payload: Prisma.$blogPayload<ExtArgs>
        fields: Prisma.blogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$blogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$blogPayload>
          }
          findFirst: {
            args: Prisma.blogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$blogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$blogPayload>
          }
          findMany: {
            args: Prisma.blogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$blogPayload>[]
          }
          create: {
            args: Prisma.blogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$blogPayload>
          }
          createMany: {
            args: Prisma.blogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.blogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$blogPayload>
          }
          update: {
            args: Prisma.blogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$blogPayload>
          }
          deleteMany: {
            args: Prisma.blogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.blogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.blogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$blogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.blogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.blogCountArgs<ExtArgs>,
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      comment: {
        payload: Prisma.$commentPayload<ExtArgs>
        fields: Prisma.commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findFirst: {
            args: Prisma.commentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          findMany: {
            args: Prisma.commentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentPayload>[]
          }
          create: {
            args: Prisma.commentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          createMany: {
            args: Prisma.commentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.commentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          update: {
            args: Prisma.commentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          deleteMany: {
            args: Prisma.commentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.commentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.commentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$commentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.commentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      item: {
        payload: Prisma.$itemPayload<ExtArgs>
        fields: Prisma.itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findFirst: {
            args: Prisma.itemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findMany: {
            args: Prisma.itemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          create: {
            args: Prisma.itemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          createMany: {
            args: Prisma.itemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.itemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          update: {
            args: Prisma.itemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          deleteMany: {
            args: Prisma.itemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.itemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.itemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.itemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      itemImage: {
        payload: Prisma.$itemImagePayload<ExtArgs>
        fields: Prisma.itemImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemImagePayload>
          }
          findFirst: {
            args: Prisma.itemImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemImagePayload>
          }
          findMany: {
            args: Prisma.itemImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemImagePayload>[]
          }
          create: {
            args: Prisma.itemImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemImagePayload>
          }
          createMany: {
            args: Prisma.itemImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.itemImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemImagePayload>
          }
          update: {
            args: Prisma.itemImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemImagePayload>
          }
          deleteMany: {
            args: Prisma.itemImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.itemImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.itemImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemImagePayload>
          }
          aggregate: {
            args: Prisma.ItemImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItemImage>
          }
          groupBy: {
            args: Prisma.itemImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemImageCountAggregateOutputType> | number
          }
        }
      }
      itemCategory: {
        payload: Prisma.$itemCategoryPayload<ExtArgs>
        fields: Prisma.itemCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemCategoryPayload>
          }
          findFirst: {
            args: Prisma.itemCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemCategoryPayload>
          }
          findMany: {
            args: Prisma.itemCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemCategoryPayload>[]
          }
          create: {
            args: Prisma.itemCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemCategoryPayload>
          }
          createMany: {
            args: Prisma.itemCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.itemCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemCategoryPayload>
          }
          update: {
            args: Prisma.itemCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemCategoryPayload>
          }
          deleteMany: {
            args: Prisma.itemCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.itemCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.itemCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$itemCategoryPayload>
          }
          aggregate: {
            args: Prisma.ItemCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItemCategory>
          }
          groupBy: {
            args: Prisma.itemCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    items: number
    blogs: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | UserCountOutputTypeCountItemsArgs
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }


  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    comments: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | BlogCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    item_image: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_image?: boolean | ItemCountOutputTypeCountItem_imageArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountItem_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemImageWhereInput
  }


  /**
   * Count Type ItemCategoryCountOutputType
   */

  export type ItemCategoryCountOutputType = {
    items: number
  }

  export type ItemCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ItemCategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemCategoryCountOutputType without action
   */
  export type ItemCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryCountOutputType
     */
    select?: ItemCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCategoryCountOutputType without action
   */
  export type ItemCategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    created_by: string
    updated_by: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    users?: boolean | role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>


  export type roleSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      users: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, roleCreateArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, roleDeleteArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpsertArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends role$usersArgs<ExtArgs> = {}>(args?: Subset<T, role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the role model
   */ 
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'String'>
    readonly name: FieldRef<"role", 'String'>
    readonly created_at: FieldRef<"role", 'DateTime'>
    readonly updated_at: FieldRef<"role", 'DateTime'>
    readonly created_by: FieldRef<"role", 'String'>
    readonly updated_by: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
  }

  /**
   * role.users
   */
  export type role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    profile_uri: string | null
    address: string | null
    role_id: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    profile_uri: string | null
    address: string | null
    role_id: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    profile_uri: number
    address: number
    role_id: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_uri?: true
    address?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_uri?: true
    address?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profile_uri?: true
    address?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    profile_uri: string | null
    address: string | null
    role_id: string
    created_at: Date
    updated_at: Date
    created_by: string
    updated_by: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_uri?: boolean
    address?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    items?: boolean | user$itemsArgs<ExtArgs>
    blogs?: boolean | user$blogsArgs<ExtArgs>
    comments?: boolean | user$commentsArgs<ExtArgs>
    detail_seller?: boolean | user$detail_sellerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_uri?: boolean
    address?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    items?: boolean | user$itemsArgs<ExtArgs>
    blogs?: boolean | user$blogsArgs<ExtArgs>
    comments?: boolean | user$commentsArgs<ExtArgs>
    detail_seller?: boolean | user$detail_sellerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      role: Prisma.$rolePayload<ExtArgs>
      items: Prisma.$itemPayload<ExtArgs>[]
      blogs: Prisma.$blogPayload<ExtArgs>[]
      comments: Prisma.$commentPayload<ExtArgs>[]
      detail_seller: Prisma.$detailSellerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      profile_uri: string | null
      address: string | null
      role_id: string
      created_at: Date
      updated_at: Date
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    items<T extends user$itemsArgs<ExtArgs> = {}>(args?: Subset<T, user$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'findMany'> | Null>;

    blogs<T extends user$blogsArgs<ExtArgs> = {}>(args?: Subset<T, user$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends user$commentsArgs<ExtArgs> = {}>(args?: Subset<T, user$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'findMany'> | Null>;

    detail_seller<T extends user$detail_sellerArgs<ExtArgs> = {}>(args?: Subset<T, user$detail_sellerArgs<ExtArgs>>): Prisma__detailSellerClient<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly profile_uri: FieldRef<"user", 'String'>
    readonly address: FieldRef<"user", 'String'>
    readonly role_id: FieldRef<"user", 'String'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
    readonly created_by: FieldRef<"user", 'String'>
    readonly updated_by: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user.items
   */
  export type user$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * user.blogs
   */
  export type user$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    where?: blogWhereInput
    orderBy?: blogOrderByWithRelationInput | blogOrderByWithRelationInput[]
    cursor?: blogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * user.comments
   */
  export type user$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * user.detail_seller
   */
  export type user$detail_sellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    where?: detailSellerWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model detailSeller
   */

  export type AggregateDetailSeller = {
    _count: DetailSellerCountAggregateOutputType | null
    _min: DetailSellerMinAggregateOutputType | null
    _max: DetailSellerMaxAggregateOutputType | null
  }

  export type DetailSellerMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    phone_number: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type DetailSellerMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    phone_number: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type DetailSellerCountAggregateOutputType = {
    id: number
    user_id: number
    phone_number: number
    description: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type DetailSellerMinAggregateInputType = {
    id?: true
    user_id?: true
    phone_number?: true
    description?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type DetailSellerMaxAggregateInputType = {
    id?: true
    user_id?: true
    phone_number?: true
    description?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type DetailSellerCountAggregateInputType = {
    id?: true
    user_id?: true
    phone_number?: true
    description?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type DetailSellerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detailSeller to aggregate.
     */
    where?: detailSellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailSellers to fetch.
     */
    orderBy?: detailSellerOrderByWithRelationInput | detailSellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detailSellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailSellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailSellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detailSellers
    **/
    _count?: true | DetailSellerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailSellerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailSellerMaxAggregateInputType
  }

  export type GetDetailSellerAggregateType<T extends DetailSellerAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailSeller]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailSeller[P]>
      : GetScalarType<T[P], AggregateDetailSeller[P]>
  }




  export type detailSellerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detailSellerWhereInput
    orderBy?: detailSellerOrderByWithAggregationInput | detailSellerOrderByWithAggregationInput[]
    by: DetailSellerScalarFieldEnum[] | DetailSellerScalarFieldEnum
    having?: detailSellerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailSellerCountAggregateInputType | true
    _min?: DetailSellerMinAggregateInputType
    _max?: DetailSellerMaxAggregateInputType
  }

  export type DetailSellerGroupByOutputType = {
    id: string
    user_id: string
    phone_number: string | null
    description: string | null
    created_at: Date
    updated_at: Date
    created_by: string
    updated_by: string
    _count: DetailSellerCountAggregateOutputType | null
    _min: DetailSellerMinAggregateOutputType | null
    _max: DetailSellerMaxAggregateOutputType | null
  }

  type GetDetailSellerGroupByPayload<T extends detailSellerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailSellerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailSellerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailSellerGroupByOutputType[P]>
            : GetScalarType<T[P], DetailSellerGroupByOutputType[P]>
        }
      >
    >


  export type detailSellerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailSeller"]>


  export type detailSellerSelectScalar = {
    id?: boolean
    user_id?: boolean
    phone_number?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type detailSellerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $detailSellerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detailSeller"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      phone_number: string | null
      description: string | null
      created_at: Date
      updated_at: Date
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["detailSeller"]>
    composites: {}
  }

  type detailSellerGetPayload<S extends boolean | null | undefined | detailSellerDefaultArgs> = $Result.GetResult<Prisma.$detailSellerPayload, S>

  type detailSellerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<detailSellerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DetailSellerCountAggregateInputType | true
    }

  export interface detailSellerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detailSeller'], meta: { name: 'detailSeller' } }
    /**
     * Find zero or one DetailSeller that matches the filter.
     * @param {detailSellerFindUniqueArgs} args - Arguments to find a DetailSeller
     * @example
     * // Get one DetailSeller
     * const detailSeller = await prisma.detailSeller.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends detailSellerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, detailSellerFindUniqueArgs<ExtArgs>>
    ): Prisma__detailSellerClient<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DetailSeller that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {detailSellerFindUniqueOrThrowArgs} args - Arguments to find a DetailSeller
     * @example
     * // Get one DetailSeller
     * const detailSeller = await prisma.detailSeller.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends detailSellerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, detailSellerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__detailSellerClient<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DetailSeller that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailSellerFindFirstArgs} args - Arguments to find a DetailSeller
     * @example
     * // Get one DetailSeller
     * const detailSeller = await prisma.detailSeller.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends detailSellerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, detailSellerFindFirstArgs<ExtArgs>>
    ): Prisma__detailSellerClient<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DetailSeller that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailSellerFindFirstOrThrowArgs} args - Arguments to find a DetailSeller
     * @example
     * // Get one DetailSeller
     * const detailSeller = await prisma.detailSeller.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends detailSellerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, detailSellerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__detailSellerClient<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DetailSellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailSellerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailSellers
     * const detailSellers = await prisma.detailSeller.findMany()
     * 
     * // Get first 10 DetailSellers
     * const detailSellers = await prisma.detailSeller.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailSellerWithIdOnly = await prisma.detailSeller.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends detailSellerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, detailSellerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DetailSeller.
     * @param {detailSellerCreateArgs} args - Arguments to create a DetailSeller.
     * @example
     * // Create one DetailSeller
     * const DetailSeller = await prisma.detailSeller.create({
     *   data: {
     *     // ... data to create a DetailSeller
     *   }
     * })
     * 
    **/
    create<T extends detailSellerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, detailSellerCreateArgs<ExtArgs>>
    ): Prisma__detailSellerClient<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DetailSellers.
     * @param {detailSellerCreateManyArgs} args - Arguments to create many DetailSellers.
     * @example
     * // Create many DetailSellers
     * const detailSeller = await prisma.detailSeller.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends detailSellerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, detailSellerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetailSeller.
     * @param {detailSellerDeleteArgs} args - Arguments to delete one DetailSeller.
     * @example
     * // Delete one DetailSeller
     * const DetailSeller = await prisma.detailSeller.delete({
     *   where: {
     *     // ... filter to delete one DetailSeller
     *   }
     * })
     * 
    **/
    delete<T extends detailSellerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, detailSellerDeleteArgs<ExtArgs>>
    ): Prisma__detailSellerClient<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DetailSeller.
     * @param {detailSellerUpdateArgs} args - Arguments to update one DetailSeller.
     * @example
     * // Update one DetailSeller
     * const detailSeller = await prisma.detailSeller.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends detailSellerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, detailSellerUpdateArgs<ExtArgs>>
    ): Prisma__detailSellerClient<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DetailSellers.
     * @param {detailSellerDeleteManyArgs} args - Arguments to filter DetailSellers to delete.
     * @example
     * // Delete a few DetailSellers
     * const { count } = await prisma.detailSeller.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends detailSellerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, detailSellerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailSellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailSellerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailSellers
     * const detailSeller = await prisma.detailSeller.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends detailSellerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, detailSellerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetailSeller.
     * @param {detailSellerUpsertArgs} args - Arguments to update or create a DetailSeller.
     * @example
     * // Update or create a DetailSeller
     * const detailSeller = await prisma.detailSeller.upsert({
     *   create: {
     *     // ... data to create a DetailSeller
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailSeller we want to update
     *   }
     * })
    **/
    upsert<T extends detailSellerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, detailSellerUpsertArgs<ExtArgs>>
    ): Prisma__detailSellerClient<$Result.GetResult<Prisma.$detailSellerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DetailSellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailSellerCountArgs} args - Arguments to filter DetailSellers to count.
     * @example
     * // Count the number of DetailSellers
     * const count = await prisma.detailSeller.count({
     *   where: {
     *     // ... the filter for the DetailSellers we want to count
     *   }
     * })
    **/
    count<T extends detailSellerCountArgs>(
      args?: Subset<T, detailSellerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailSellerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailSeller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailSellerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetailSellerAggregateArgs>(args: Subset<T, DetailSellerAggregateArgs>): Prisma.PrismaPromise<GetDetailSellerAggregateType<T>>

    /**
     * Group by DetailSeller.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailSellerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detailSellerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detailSellerGroupByArgs['orderBy'] }
        : { orderBy?: detailSellerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detailSellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailSellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detailSeller model
   */
  readonly fields: detailSellerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detailSeller.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detailSellerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the detailSeller model
   */ 
  interface detailSellerFieldRefs {
    readonly id: FieldRef<"detailSeller", 'String'>
    readonly user_id: FieldRef<"detailSeller", 'String'>
    readonly phone_number: FieldRef<"detailSeller", 'String'>
    readonly description: FieldRef<"detailSeller", 'String'>
    readonly created_at: FieldRef<"detailSeller", 'DateTime'>
    readonly updated_at: FieldRef<"detailSeller", 'DateTime'>
    readonly created_by: FieldRef<"detailSeller", 'String'>
    readonly updated_by: FieldRef<"detailSeller", 'String'>
  }
    

  // Custom InputTypes
  /**
   * detailSeller findUnique
   */
  export type detailSellerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    /**
     * Filter, which detailSeller to fetch.
     */
    where: detailSellerWhereUniqueInput
  }

  /**
   * detailSeller findUniqueOrThrow
   */
  export type detailSellerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    /**
     * Filter, which detailSeller to fetch.
     */
    where: detailSellerWhereUniqueInput
  }

  /**
   * detailSeller findFirst
   */
  export type detailSellerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    /**
     * Filter, which detailSeller to fetch.
     */
    where?: detailSellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailSellers to fetch.
     */
    orderBy?: detailSellerOrderByWithRelationInput | detailSellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detailSellers.
     */
    cursor?: detailSellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailSellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailSellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detailSellers.
     */
    distinct?: DetailSellerScalarFieldEnum | DetailSellerScalarFieldEnum[]
  }

  /**
   * detailSeller findFirstOrThrow
   */
  export type detailSellerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    /**
     * Filter, which detailSeller to fetch.
     */
    where?: detailSellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailSellers to fetch.
     */
    orderBy?: detailSellerOrderByWithRelationInput | detailSellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detailSellers.
     */
    cursor?: detailSellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailSellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailSellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detailSellers.
     */
    distinct?: DetailSellerScalarFieldEnum | DetailSellerScalarFieldEnum[]
  }

  /**
   * detailSeller findMany
   */
  export type detailSellerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    /**
     * Filter, which detailSellers to fetch.
     */
    where?: detailSellerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailSellers to fetch.
     */
    orderBy?: detailSellerOrderByWithRelationInput | detailSellerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detailSellers.
     */
    cursor?: detailSellerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailSellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailSellers.
     */
    skip?: number
    distinct?: DetailSellerScalarFieldEnum | DetailSellerScalarFieldEnum[]
  }

  /**
   * detailSeller create
   */
  export type detailSellerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    /**
     * The data needed to create a detailSeller.
     */
    data: XOR<detailSellerCreateInput, detailSellerUncheckedCreateInput>
  }

  /**
   * detailSeller createMany
   */
  export type detailSellerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detailSellers.
     */
    data: detailSellerCreateManyInput | detailSellerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detailSeller update
   */
  export type detailSellerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    /**
     * The data needed to update a detailSeller.
     */
    data: XOR<detailSellerUpdateInput, detailSellerUncheckedUpdateInput>
    /**
     * Choose, which detailSeller to update.
     */
    where: detailSellerWhereUniqueInput
  }

  /**
   * detailSeller updateMany
   */
  export type detailSellerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detailSellers.
     */
    data: XOR<detailSellerUpdateManyMutationInput, detailSellerUncheckedUpdateManyInput>
    /**
     * Filter which detailSellers to update
     */
    where?: detailSellerWhereInput
  }

  /**
   * detailSeller upsert
   */
  export type detailSellerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    /**
     * The filter to search for the detailSeller to update in case it exists.
     */
    where: detailSellerWhereUniqueInput
    /**
     * In case the detailSeller found by the `where` argument doesn't exist, create a new detailSeller with this data.
     */
    create: XOR<detailSellerCreateInput, detailSellerUncheckedCreateInput>
    /**
     * In case the detailSeller was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detailSellerUpdateInput, detailSellerUncheckedUpdateInput>
  }

  /**
   * detailSeller delete
   */
  export type detailSellerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
    /**
     * Filter which detailSeller to delete.
     */
    where: detailSellerWhereUniqueInput
  }

  /**
   * detailSeller deleteMany
   */
  export type detailSellerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detailSellers to delete
     */
    where?: detailSellerWhereInput
  }

  /**
   * detailSeller without action
   */
  export type detailSellerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailSeller
     */
    select?: detailSellerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailSellerInclude<ExtArgs> | null
  }


  /**
   * Model blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    user_id: string | null
    image_uri: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    user_id: string | null
    image_uri: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    content: number
    user_id: number
    image_uri: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    user_id?: true
    image_uri?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    user_id?: true
    image_uri?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    user_id?: true
    image_uri?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blog to aggregate.
     */
    where?: blogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogOrderByWithRelationInput | blogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type blogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogWhereInput
    orderBy?: blogOrderByWithAggregationInput | blogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: blogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    content: string
    user_id: string
    image_uri: string
    created_at: Date
    updated_at: Date
    created_by: string
    updated_by: string
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends blogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type blogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    image_uri?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    comments?: boolean | blog$commentsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>


  export type blogSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    user_id?: boolean
    image_uri?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type blogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    comments?: boolean | blog$commentsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $blogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blog"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      comments: Prisma.$commentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      user_id: string
      image_uri: string
      created_at: Date
      updated_at: Date
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type blogGetPayload<S extends boolean | null | undefined | blogDefaultArgs> = $Result.GetResult<Prisma.$blogPayload, S>

  type blogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<blogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface blogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blog'], meta: { name: 'blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {blogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends blogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, blogFindUniqueArgs<ExtArgs>>
    ): Prisma__blogClient<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {blogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends blogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__blogClient<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends blogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, blogFindFirstArgs<ExtArgs>>
    ): Prisma__blogClient<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends blogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__blogClient<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends blogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Blog.
     * @param {blogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
    **/
    create<T extends blogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, blogCreateArgs<ExtArgs>>
    ): Prisma__blogClient<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blogs.
     * @param {blogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends blogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog.
     * @param {blogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
    **/
    delete<T extends blogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, blogDeleteArgs<ExtArgs>>
    ): Prisma__blogClient<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Blog.
     * @param {blogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends blogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, blogUpdateArgs<ExtArgs>>
    ): Prisma__blogClient<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blogs.
     * @param {blogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends blogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends blogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, blogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {blogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
    **/
    upsert<T extends blogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, blogUpsertArgs<ExtArgs>>
    ): Prisma__blogClient<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends blogCountArgs>(
      args?: Subset<T, blogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blogGroupByArgs['orderBy'] }
        : { orderBy?: blogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blog model
   */
  readonly fields: blogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    comments<T extends blog$commentsArgs<ExtArgs> = {}>(args?: Subset<T, blog$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the blog model
   */ 
  interface blogFieldRefs {
    readonly id: FieldRef<"blog", 'String'>
    readonly title: FieldRef<"blog", 'String'>
    readonly content: FieldRef<"blog", 'String'>
    readonly user_id: FieldRef<"blog", 'String'>
    readonly image_uri: FieldRef<"blog", 'String'>
    readonly created_at: FieldRef<"blog", 'DateTime'>
    readonly updated_at: FieldRef<"blog", 'DateTime'>
    readonly created_by: FieldRef<"blog", 'String'>
    readonly updated_by: FieldRef<"blog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * blog findUnique
   */
  export type blogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    /**
     * Filter, which blog to fetch.
     */
    where: blogWhereUniqueInput
  }

  /**
   * blog findUniqueOrThrow
   */
  export type blogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    /**
     * Filter, which blog to fetch.
     */
    where: blogWhereUniqueInput
  }

  /**
   * blog findFirst
   */
  export type blogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    /**
     * Filter, which blog to fetch.
     */
    where?: blogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogOrderByWithRelationInput | blogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * blog findFirstOrThrow
   */
  export type blogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    /**
     * Filter, which blog to fetch.
     */
    where?: blogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogOrderByWithRelationInput | blogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogs.
     */
    cursor?: blogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * blog findMany
   */
  export type blogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogs to fetch.
     */
    orderBy?: blogOrderByWithRelationInput | blogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blogs.
     */
    cursor?: blogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * blog create
   */
  export type blogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    /**
     * The data needed to create a blog.
     */
    data: XOR<blogCreateInput, blogUncheckedCreateInput>
  }

  /**
   * blog createMany
   */
  export type blogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blogs.
     */
    data: blogCreateManyInput | blogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blog update
   */
  export type blogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    /**
     * The data needed to update a blog.
     */
    data: XOR<blogUpdateInput, blogUncheckedUpdateInput>
    /**
     * Choose, which blog to update.
     */
    where: blogWhereUniqueInput
  }

  /**
   * blog updateMany
   */
  export type blogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blogs.
     */
    data: XOR<blogUpdateManyMutationInput, blogUncheckedUpdateManyInput>
    /**
     * Filter which blogs to update
     */
    where?: blogWhereInput
  }

  /**
   * blog upsert
   */
  export type blogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    /**
     * The filter to search for the blog to update in case it exists.
     */
    where: blogWhereUniqueInput
    /**
     * In case the blog found by the `where` argument doesn't exist, create a new blog with this data.
     */
    create: XOR<blogCreateInput, blogUncheckedCreateInput>
    /**
     * In case the blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blogUpdateInput, blogUncheckedUpdateInput>
  }

  /**
   * blog delete
   */
  export type blogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
    /**
     * Filter which blog to delete.
     */
    where: blogWhereUniqueInput
  }

  /**
   * blog deleteMany
   */
  export type blogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogs to delete
     */
    where?: blogWhereInput
  }

  /**
   * blog.comments
   */
  export type blog$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    where?: commentWhereInput
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    cursor?: commentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * blog without action
   */
  export type blogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogInclude<ExtArgs> | null
  }


  /**
   * Model comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    blog_id: string | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    blog_id: string | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    user_id: number
    blog_id: number
    comment: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    user_id?: true
    blog_id?: true
    comment?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    user_id?: true
    blog_id?: true
    comment?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    user_id?: true
    blog_id?: true
    comment?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comment to aggregate.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentWhereInput
    orderBy?: commentOrderByWithAggregationInput | commentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    user_id: string
    blog_id: string
    comment: string
    created_at: Date
    updated_at: Date
    created_by: string
    updated_by: string
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    blog_id?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    blog?: boolean | blogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>


  export type commentSelectScalar = {
    id?: boolean
    user_id?: boolean
    blog_id?: boolean
    comment?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    blog?: boolean | blogDefaultArgs<ExtArgs>
  }

  export type $commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comment"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      blog: Prisma.$blogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      blog_id: string
      comment: string
      created_at: Date
      updated_at: Date
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type commentGetPayload<S extends boolean | null | undefined | commentDefaultArgs> = $Result.GetResult<Prisma.$commentPayload, S>

  type commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<commentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comment'], meta: { name: 'comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {commentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends commentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, commentFindUniqueArgs<ExtArgs>>
    ): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {commentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends commentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, commentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends commentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, commentFindFirstArgs<ExtArgs>>
    ): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends commentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, commentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends commentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, commentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {commentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends commentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, commentCreateArgs<ExtArgs>>
    ): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {commentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends commentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, commentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {commentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends commentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, commentDeleteArgs<ExtArgs>>
    ): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {commentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends commentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, commentUpdateArgs<ExtArgs>>
    ): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {commentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends commentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, commentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends commentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, commentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {commentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends commentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, commentUpsertArgs<ExtArgs>>
    ): Prisma__commentClient<$Result.GetResult<Prisma.$commentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentCountArgs>(
      args?: Subset<T, commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentGroupByArgs['orderBy'] }
        : { orderBy?: commentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comment model
   */
  readonly fields: commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    blog<T extends blogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blogDefaultArgs<ExtArgs>>): Prisma__blogClient<$Result.GetResult<Prisma.$blogPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the comment model
   */ 
  interface commentFieldRefs {
    readonly id: FieldRef<"comment", 'String'>
    readonly user_id: FieldRef<"comment", 'String'>
    readonly blog_id: FieldRef<"comment", 'String'>
    readonly comment: FieldRef<"comment", 'String'>
    readonly created_at: FieldRef<"comment", 'DateTime'>
    readonly updated_at: FieldRef<"comment", 'DateTime'>
    readonly created_by: FieldRef<"comment", 'String'>
    readonly updated_by: FieldRef<"comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comment findUnique
   */
  export type commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findUniqueOrThrow
   */
  export type commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment findFirst
   */
  export type commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findFirstOrThrow
   */
  export type commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comment to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment findMany
   */
  export type commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentOrderByWithRelationInput | commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * comment create
   */
  export type commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to create a comment.
     */
    data: XOR<commentCreateInput, commentUncheckedCreateInput>
  }

  /**
   * comment createMany
   */
  export type commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentCreateManyInput | commentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comment update
   */
  export type commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The data needed to update a comment.
     */
    data: XOR<commentUpdateInput, commentUncheckedUpdateInput>
    /**
     * Choose, which comment to update.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment updateMany
   */
  export type commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentWhereInput
  }

  /**
   * comment upsert
   */
  export type commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * The filter to search for the comment to update in case it exists.
     */
    where: commentWhereUniqueInput
    /**
     * In case the comment found by the `where` argument doesn't exist, create a new comment with this data.
     */
    create: XOR<commentCreateInput, commentUncheckedCreateInput>
    /**
     * In case the comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentUpdateInput, commentUncheckedUpdateInput>
  }

  /**
   * comment delete
   */
  export type commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
    /**
     * Filter which comment to delete.
     */
    where: commentWhereUniqueInput
  }

  /**
   * comment deleteMany
   */
  export type commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentWhereInput
  }

  /**
   * comment without action
   */
  export type commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comment
     */
    select?: commentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentInclude<ExtArgs> | null
  }


  /**
   * Model item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    price: number | null
  }

  export type ItemSumAggregateOutputType = {
    price: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    item_category_id: string | null
    price: number | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    item_category_id: string | null
    price: number | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    item_category_id: number
    price: number
    description: number
    is_active: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    price?: true
  }

  export type ItemSumAggregateInputType = {
    price?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    item_category_id?: true
    price?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    item_category_id?: true
    price?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    item_category_id?: true
    price?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item to aggregate.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
    orderBy?: itemOrderByWithAggregationInput | itemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    user_id: string
    name: string
    item_category_id: string
    price: number
    description: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    created_by: string
    updated_by: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    item_category_id?: boolean
    price?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    item_image?: boolean | item$item_imageArgs<ExtArgs>
    item_category?: boolean | itemCategoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>


  export type itemSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    item_category_id?: boolean
    price?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_image?: boolean | item$item_imageArgs<ExtArgs>
    item_category?: boolean | itemCategoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item"
    objects: {
      item_image: Prisma.$itemImagePayload<ExtArgs>[]
      item_category: Prisma.$itemCategoryPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      name: string
      item_category_id: string
      price: number
      description: string
      is_active: boolean
      created_at: Date
      updated_at: Date
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type itemGetPayload<S extends boolean | null | undefined | itemDefaultArgs> = $Result.GetResult<Prisma.$itemPayload, S>

  type itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<itemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item'], meta: { name: 'item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {itemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends itemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, itemFindUniqueArgs<ExtArgs>>
    ): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {itemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends itemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, itemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends itemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, itemFindFirstArgs<ExtArgs>>
    ): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends itemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, itemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends itemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item.
     * @param {itemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends itemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, itemCreateArgs<ExtArgs>>
    ): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Items.
     * @param {itemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends itemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {itemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends itemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, itemDeleteArgs<ExtArgs>>
    ): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item.
     * @param {itemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends itemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, itemUpdateArgs<ExtArgs>>
    ): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {itemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends itemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends itemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, itemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {itemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends itemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, itemUpsertArgs<ExtArgs>>
    ): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemCountArgs>(
      args?: Subset<T, itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemGroupByArgs['orderBy'] }
        : { orderBy?: itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item model
   */
  readonly fields: itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    item_image<T extends item$item_imageArgs<ExtArgs> = {}>(args?: Subset<T, item$item_imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    item_category<T extends itemCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, itemCategoryDefaultArgs<ExtArgs>>): Prisma__itemCategoryClient<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the item model
   */ 
  interface itemFieldRefs {
    readonly id: FieldRef<"item", 'String'>
    readonly user_id: FieldRef<"item", 'String'>
    readonly name: FieldRef<"item", 'String'>
    readonly item_category_id: FieldRef<"item", 'String'>
    readonly price: FieldRef<"item", 'Int'>
    readonly description: FieldRef<"item", 'String'>
    readonly is_active: FieldRef<"item", 'Boolean'>
    readonly created_at: FieldRef<"item", 'DateTime'>
    readonly updated_at: FieldRef<"item", 'DateTime'>
    readonly created_by: FieldRef<"item", 'String'>
    readonly updated_by: FieldRef<"item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * item findUnique
   */
  export type itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findUniqueOrThrow
   */
  export type itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findFirst
   */
  export type itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findFirstOrThrow
   */
  export type itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findMany
   */
  export type itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item create
   */
  export type itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to create a item.
     */
    data: XOR<itemCreateInput, itemUncheckedCreateInput>
  }

  /**
   * item createMany
   */
  export type itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemCreateManyInput | itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item update
   */
  export type itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to update a item.
     */
    data: XOR<itemUpdateInput, itemUncheckedUpdateInput>
    /**
     * Choose, which item to update.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item updateMany
   */
  export type itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemWhereInput
  }

  /**
   * item upsert
   */
  export type itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The filter to search for the item to update in case it exists.
     */
    where: itemWhereUniqueInput
    /**
     * In case the item found by the `where` argument doesn't exist, create a new item with this data.
     */
    create: XOR<itemCreateInput, itemUncheckedCreateInput>
    /**
     * In case the item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemUpdateInput, itemUncheckedUpdateInput>
  }

  /**
   * item delete
   */
  export type itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter which item to delete.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item deleteMany
   */
  export type itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemWhereInput
  }

  /**
   * item.item_image
   */
  export type item$item_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    where?: itemImageWhereInput
    orderBy?: itemImageOrderByWithRelationInput | itemImageOrderByWithRelationInput[]
    cursor?: itemImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * item without action
   */
  export type itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
  }


  /**
   * Model itemImage
   */

  export type AggregateItemImage = {
    _count: ItemImageCountAggregateOutputType | null
    _min: ItemImageMinAggregateOutputType | null
    _max: ItemImageMaxAggregateOutputType | null
  }

  export type ItemImageMinAggregateOutputType = {
    id: string | null
    item_id: string | null
    uri: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type ItemImageMaxAggregateOutputType = {
    id: string | null
    item_id: string | null
    uri: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type ItemImageCountAggregateOutputType = {
    id: number
    item_id: number
    uri: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type ItemImageMinAggregateInputType = {
    id?: true
    item_id?: true
    uri?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type ItemImageMaxAggregateInputType = {
    id?: true
    item_id?: true
    uri?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type ItemImageCountAggregateInputType = {
    id?: true
    item_id?: true
    uri?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type ItemImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itemImage to aggregate.
     */
    where?: itemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemImages to fetch.
     */
    orderBy?: itemImageOrderByWithRelationInput | itemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itemImages
    **/
    _count?: true | ItemImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemImageMaxAggregateInputType
  }

  export type GetItemImageAggregateType<T extends ItemImageAggregateArgs> = {
        [P in keyof T & keyof AggregateItemImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemImage[P]>
      : GetScalarType<T[P], AggregateItemImage[P]>
  }




  export type itemImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemImageWhereInput
    orderBy?: itemImageOrderByWithAggregationInput | itemImageOrderByWithAggregationInput[]
    by: ItemImageScalarFieldEnum[] | ItemImageScalarFieldEnum
    having?: itemImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemImageCountAggregateInputType | true
    _min?: ItemImageMinAggregateInputType
    _max?: ItemImageMaxAggregateInputType
  }

  export type ItemImageGroupByOutputType = {
    id: string
    item_id: string
    uri: string
    created_at: Date
    updated_at: Date
    created_by: string
    updated_by: string
    _count: ItemImageCountAggregateOutputType | null
    _min: ItemImageMinAggregateOutputType | null
    _max: ItemImageMaxAggregateOutputType | null
  }

  type GetItemImageGroupByPayload<T extends itemImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemImageGroupByOutputType[P]>
            : GetScalarType<T[P], ItemImageGroupByOutputType[P]>
        }
      >
    >


  export type itemImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item_id?: boolean
    uri?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    item?: boolean | itemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemImage"]>


  export type itemImageSelectScalar = {
    id?: boolean
    item_id?: boolean
    uri?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type itemImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | itemDefaultArgs<ExtArgs>
  }

  export type $itemImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "itemImage"
    objects: {
      item: Prisma.$itemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item_id: string
      uri: string
      created_at: Date
      updated_at: Date
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["itemImage"]>
    composites: {}
  }

  type itemImageGetPayload<S extends boolean | null | undefined | itemImageDefaultArgs> = $Result.GetResult<Prisma.$itemImagePayload, S>

  type itemImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<itemImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemImageCountAggregateInputType | true
    }

  export interface itemImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['itemImage'], meta: { name: 'itemImage' } }
    /**
     * Find zero or one ItemImage that matches the filter.
     * @param {itemImageFindUniqueArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends itemImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, itemImageFindUniqueArgs<ExtArgs>>
    ): Prisma__itemImageClient<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ItemImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {itemImageFindUniqueOrThrowArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends itemImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, itemImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__itemImageClient<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ItemImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemImageFindFirstArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends itemImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, itemImageFindFirstArgs<ExtArgs>>
    ): Prisma__itemImageClient<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ItemImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemImageFindFirstOrThrowArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends itemImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, itemImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__itemImageClient<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ItemImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemImages
     * const itemImages = await prisma.itemImage.findMany()
     * 
     * // Get first 10 ItemImages
     * const itemImages = await prisma.itemImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemImageWithIdOnly = await prisma.itemImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends itemImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itemImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ItemImage.
     * @param {itemImageCreateArgs} args - Arguments to create a ItemImage.
     * @example
     * // Create one ItemImage
     * const ItemImage = await prisma.itemImage.create({
     *   data: {
     *     // ... data to create a ItemImage
     *   }
     * })
     * 
    **/
    create<T extends itemImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, itemImageCreateArgs<ExtArgs>>
    ): Prisma__itemImageClient<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ItemImages.
     * @param {itemImageCreateManyArgs} args - Arguments to create many ItemImages.
     * @example
     * // Create many ItemImages
     * const itemImage = await prisma.itemImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends itemImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itemImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemImage.
     * @param {itemImageDeleteArgs} args - Arguments to delete one ItemImage.
     * @example
     * // Delete one ItemImage
     * const ItemImage = await prisma.itemImage.delete({
     *   where: {
     *     // ... filter to delete one ItemImage
     *   }
     * })
     * 
    **/
    delete<T extends itemImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, itemImageDeleteArgs<ExtArgs>>
    ): Prisma__itemImageClient<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ItemImage.
     * @param {itemImageUpdateArgs} args - Arguments to update one ItemImage.
     * @example
     * // Update one ItemImage
     * const itemImage = await prisma.itemImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends itemImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, itemImageUpdateArgs<ExtArgs>>
    ): Prisma__itemImageClient<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ItemImages.
     * @param {itemImageDeleteManyArgs} args - Arguments to filter ItemImages to delete.
     * @example
     * // Delete a few ItemImages
     * const { count } = await prisma.itemImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends itemImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itemImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemImages
     * const itemImage = await prisma.itemImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends itemImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, itemImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemImage.
     * @param {itemImageUpsertArgs} args - Arguments to update or create a ItemImage.
     * @example
     * // Update or create a ItemImage
     * const itemImage = await prisma.itemImage.upsert({
     *   create: {
     *     // ... data to create a ItemImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemImage we want to update
     *   }
     * })
    **/
    upsert<T extends itemImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, itemImageUpsertArgs<ExtArgs>>
    ): Prisma__itemImageClient<$Result.GetResult<Prisma.$itemImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemImageCountArgs} args - Arguments to filter ItemImages to count.
     * @example
     * // Count the number of ItemImages
     * const count = await prisma.itemImage.count({
     *   where: {
     *     // ... the filter for the ItemImages we want to count
     *   }
     * })
    **/
    count<T extends itemImageCountArgs>(
      args?: Subset<T, itemImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemImageAggregateArgs>(args: Subset<T, ItemImageAggregateArgs>): Prisma.PrismaPromise<GetItemImageAggregateType<T>>

    /**
     * Group by ItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemImageGroupByArgs['orderBy'] }
        : { orderBy?: itemImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the itemImage model
   */
  readonly fields: itemImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for itemImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    item<T extends itemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, itemDefaultArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the itemImage model
   */ 
  interface itemImageFieldRefs {
    readonly id: FieldRef<"itemImage", 'String'>
    readonly item_id: FieldRef<"itemImage", 'String'>
    readonly uri: FieldRef<"itemImage", 'String'>
    readonly created_at: FieldRef<"itemImage", 'DateTime'>
    readonly updated_at: FieldRef<"itemImage", 'DateTime'>
    readonly created_by: FieldRef<"itemImage", 'String'>
    readonly updated_by: FieldRef<"itemImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * itemImage findUnique
   */
  export type itemImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    /**
     * Filter, which itemImage to fetch.
     */
    where: itemImageWhereUniqueInput
  }

  /**
   * itemImage findUniqueOrThrow
   */
  export type itemImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    /**
     * Filter, which itemImage to fetch.
     */
    where: itemImageWhereUniqueInput
  }

  /**
   * itemImage findFirst
   */
  export type itemImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    /**
     * Filter, which itemImage to fetch.
     */
    where?: itemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemImages to fetch.
     */
    orderBy?: itemImageOrderByWithRelationInput | itemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemImages.
     */
    cursor?: itemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemImages.
     */
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * itemImage findFirstOrThrow
   */
  export type itemImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    /**
     * Filter, which itemImage to fetch.
     */
    where?: itemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemImages to fetch.
     */
    orderBy?: itemImageOrderByWithRelationInput | itemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemImages.
     */
    cursor?: itemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemImages.
     */
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * itemImage findMany
   */
  export type itemImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    /**
     * Filter, which itemImages to fetch.
     */
    where?: itemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemImages to fetch.
     */
    orderBy?: itemImageOrderByWithRelationInput | itemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itemImages.
     */
    cursor?: itemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemImages.
     */
    skip?: number
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }

  /**
   * itemImage create
   */
  export type itemImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    /**
     * The data needed to create a itemImage.
     */
    data: XOR<itemImageCreateInput, itemImageUncheckedCreateInput>
  }

  /**
   * itemImage createMany
   */
  export type itemImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many itemImages.
     */
    data: itemImageCreateManyInput | itemImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * itemImage update
   */
  export type itemImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    /**
     * The data needed to update a itemImage.
     */
    data: XOR<itemImageUpdateInput, itemImageUncheckedUpdateInput>
    /**
     * Choose, which itemImage to update.
     */
    where: itemImageWhereUniqueInput
  }

  /**
   * itemImage updateMany
   */
  export type itemImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update itemImages.
     */
    data: XOR<itemImageUpdateManyMutationInput, itemImageUncheckedUpdateManyInput>
    /**
     * Filter which itemImages to update
     */
    where?: itemImageWhereInput
  }

  /**
   * itemImage upsert
   */
  export type itemImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    /**
     * The filter to search for the itemImage to update in case it exists.
     */
    where: itemImageWhereUniqueInput
    /**
     * In case the itemImage found by the `where` argument doesn't exist, create a new itemImage with this data.
     */
    create: XOR<itemImageCreateInput, itemImageUncheckedCreateInput>
    /**
     * In case the itemImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemImageUpdateInput, itemImageUncheckedUpdateInput>
  }

  /**
   * itemImage delete
   */
  export type itemImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
    /**
     * Filter which itemImage to delete.
     */
    where: itemImageWhereUniqueInput
  }

  /**
   * itemImage deleteMany
   */
  export type itemImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itemImages to delete
     */
    where?: itemImageWhereInput
  }

  /**
   * itemImage without action
   */
  export type itemImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemImage
     */
    select?: itemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemImageInclude<ExtArgs> | null
  }


  /**
   * Model itemCategory
   */

  export type AggregateItemCategory = {
    _count: ItemCategoryCountAggregateOutputType | null
    _min: ItemCategoryMinAggregateOutputType | null
    _max: ItemCategoryMaxAggregateOutputType | null
  }

  export type ItemCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type ItemCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type ItemCategoryCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type ItemCategoryMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type ItemCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type ItemCategoryCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type ItemCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itemCategory to aggregate.
     */
    where?: itemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemCategories to fetch.
     */
    orderBy?: itemCategoryOrderByWithRelationInput | itemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itemCategories
    **/
    _count?: true | ItemCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemCategoryMaxAggregateInputType
  }

  export type GetItemCategoryAggregateType<T extends ItemCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateItemCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemCategory[P]>
      : GetScalarType<T[P], AggregateItemCategory[P]>
  }




  export type itemCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemCategoryWhereInput
    orderBy?: itemCategoryOrderByWithAggregationInput | itemCategoryOrderByWithAggregationInput[]
    by: ItemCategoryScalarFieldEnum[] | ItemCategoryScalarFieldEnum
    having?: itemCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCategoryCountAggregateInputType | true
    _min?: ItemCategoryMinAggregateInputType
    _max?: ItemCategoryMaxAggregateInputType
  }

  export type ItemCategoryGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    created_by: string
    updated_by: string
    _count: ItemCategoryCountAggregateOutputType | null
    _min: ItemCategoryMinAggregateOutputType | null
    _max: ItemCategoryMaxAggregateOutputType | null
  }

  type GetItemCategoryGroupByPayload<T extends itemCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ItemCategoryGroupByOutputType[P]>
        }
      >
    >


  export type itemCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    items?: boolean | itemCategory$itemsArgs<ExtArgs>
    _count?: boolean | ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCategory"]>


  export type itemCategorySelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type itemCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | itemCategory$itemsArgs<ExtArgs>
    _count?: boolean | ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $itemCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "itemCategory"
    objects: {
      items: Prisma.$itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["itemCategory"]>
    composites: {}
  }

  type itemCategoryGetPayload<S extends boolean | null | undefined | itemCategoryDefaultArgs> = $Result.GetResult<Prisma.$itemCategoryPayload, S>

  type itemCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<itemCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCategoryCountAggregateInputType | true
    }

  export interface itemCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['itemCategory'], meta: { name: 'itemCategory' } }
    /**
     * Find zero or one ItemCategory that matches the filter.
     * @param {itemCategoryFindUniqueArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends itemCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, itemCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__itemCategoryClient<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ItemCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {itemCategoryFindUniqueOrThrowArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends itemCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, itemCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__itemCategoryClient<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ItemCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCategoryFindFirstArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends itemCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, itemCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__itemCategoryClient<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ItemCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCategoryFindFirstOrThrowArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends itemCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, itemCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__itemCategoryClient<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ItemCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemCategories
     * const itemCategories = await prisma.itemCategory.findMany()
     * 
     * // Get first 10 ItemCategories
     * const itemCategories = await prisma.itemCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemCategoryWithIdOnly = await prisma.itemCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends itemCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itemCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ItemCategory.
     * @param {itemCategoryCreateArgs} args - Arguments to create a ItemCategory.
     * @example
     * // Create one ItemCategory
     * const ItemCategory = await prisma.itemCategory.create({
     *   data: {
     *     // ... data to create a ItemCategory
     *   }
     * })
     * 
    **/
    create<T extends itemCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, itemCategoryCreateArgs<ExtArgs>>
    ): Prisma__itemCategoryClient<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ItemCategories.
     * @param {itemCategoryCreateManyArgs} args - Arguments to create many ItemCategories.
     * @example
     * // Create many ItemCategories
     * const itemCategory = await prisma.itemCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends itemCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itemCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemCategory.
     * @param {itemCategoryDeleteArgs} args - Arguments to delete one ItemCategory.
     * @example
     * // Delete one ItemCategory
     * const ItemCategory = await prisma.itemCategory.delete({
     *   where: {
     *     // ... filter to delete one ItemCategory
     *   }
     * })
     * 
    **/
    delete<T extends itemCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, itemCategoryDeleteArgs<ExtArgs>>
    ): Prisma__itemCategoryClient<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ItemCategory.
     * @param {itemCategoryUpdateArgs} args - Arguments to update one ItemCategory.
     * @example
     * // Update one ItemCategory
     * const itemCategory = await prisma.itemCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends itemCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, itemCategoryUpdateArgs<ExtArgs>>
    ): Prisma__itemCategoryClient<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ItemCategories.
     * @param {itemCategoryDeleteManyArgs} args - Arguments to filter ItemCategories to delete.
     * @example
     * // Delete a few ItemCategories
     * const { count } = await prisma.itemCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends itemCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, itemCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemCategories
     * const itemCategory = await prisma.itemCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends itemCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, itemCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemCategory.
     * @param {itemCategoryUpsertArgs} args - Arguments to update or create a ItemCategory.
     * @example
     * // Update or create a ItemCategory
     * const itemCategory = await prisma.itemCategory.upsert({
     *   create: {
     *     // ... data to create a ItemCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemCategory we want to update
     *   }
     * })
    **/
    upsert<T extends itemCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, itemCategoryUpsertArgs<ExtArgs>>
    ): Prisma__itemCategoryClient<$Result.GetResult<Prisma.$itemCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCategoryCountArgs} args - Arguments to filter ItemCategories to count.
     * @example
     * // Count the number of ItemCategories
     * const count = await prisma.itemCategory.count({
     *   where: {
     *     // ... the filter for the ItemCategories we want to count
     *   }
     * })
    **/
    count<T extends itemCategoryCountArgs>(
      args?: Subset<T, itemCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemCategoryAggregateArgs>(args: Subset<T, ItemCategoryAggregateArgs>): Prisma.PrismaPromise<GetItemCategoryAggregateType<T>>

    /**
     * Group by ItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemCategoryGroupByArgs['orderBy'] }
        : { orderBy?: itemCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the itemCategory model
   */
  readonly fields: itemCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for itemCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    items<T extends itemCategory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, itemCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the itemCategory model
   */ 
  interface itemCategoryFieldRefs {
    readonly id: FieldRef<"itemCategory", 'String'>
    readonly name: FieldRef<"itemCategory", 'String'>
    readonly created_at: FieldRef<"itemCategory", 'DateTime'>
    readonly updated_at: FieldRef<"itemCategory", 'DateTime'>
    readonly created_by: FieldRef<"itemCategory", 'String'>
    readonly updated_by: FieldRef<"itemCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * itemCategory findUnique
   */
  export type itemCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which itemCategory to fetch.
     */
    where: itemCategoryWhereUniqueInput
  }

  /**
   * itemCategory findUniqueOrThrow
   */
  export type itemCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which itemCategory to fetch.
     */
    where: itemCategoryWhereUniqueInput
  }

  /**
   * itemCategory findFirst
   */
  export type itemCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which itemCategory to fetch.
     */
    where?: itemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemCategories to fetch.
     */
    orderBy?: itemCategoryOrderByWithRelationInput | itemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemCategories.
     */
    cursor?: itemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemCategories.
     */
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * itemCategory findFirstOrThrow
   */
  export type itemCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which itemCategory to fetch.
     */
    where?: itemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemCategories to fetch.
     */
    orderBy?: itemCategoryOrderByWithRelationInput | itemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemCategories.
     */
    cursor?: itemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemCategories.
     */
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * itemCategory findMany
   */
  export type itemCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which itemCategories to fetch.
     */
    where?: itemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemCategories to fetch.
     */
    orderBy?: itemCategoryOrderByWithRelationInput | itemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itemCategories.
     */
    cursor?: itemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemCategories.
     */
    skip?: number
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * itemCategory create
   */
  export type itemCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a itemCategory.
     */
    data: XOR<itemCategoryCreateInput, itemCategoryUncheckedCreateInput>
  }

  /**
   * itemCategory createMany
   */
  export type itemCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many itemCategories.
     */
    data: itemCategoryCreateManyInput | itemCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * itemCategory update
   */
  export type itemCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a itemCategory.
     */
    data: XOR<itemCategoryUpdateInput, itemCategoryUncheckedUpdateInput>
    /**
     * Choose, which itemCategory to update.
     */
    where: itemCategoryWhereUniqueInput
  }

  /**
   * itemCategory updateMany
   */
  export type itemCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update itemCategories.
     */
    data: XOR<itemCategoryUpdateManyMutationInput, itemCategoryUncheckedUpdateManyInput>
    /**
     * Filter which itemCategories to update
     */
    where?: itemCategoryWhereInput
  }

  /**
   * itemCategory upsert
   */
  export type itemCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the itemCategory to update in case it exists.
     */
    where: itemCategoryWhereUniqueInput
    /**
     * In case the itemCategory found by the `where` argument doesn't exist, create a new itemCategory with this data.
     */
    create: XOR<itemCategoryCreateInput, itemCategoryUncheckedCreateInput>
    /**
     * In case the itemCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemCategoryUpdateInput, itemCategoryUncheckedUpdateInput>
  }

  /**
   * itemCategory delete
   */
  export type itemCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
    /**
     * Filter which itemCategory to delete.
     */
    where: itemCategoryWhereUniqueInput
  }

  /**
   * itemCategory deleteMany
   */
  export type itemCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itemCategories to delete
     */
    where?: itemCategoryWhereInput
  }

  /**
   * itemCategory.items
   */
  export type itemCategory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * itemCategory without action
   */
  export type itemCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemCategory
     */
    select?: itemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemCategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    profile_uri: 'profile_uri',
    address: 'address',
    role_id: 'role_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DetailSellerScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    phone_number: 'phone_number',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type DetailSellerScalarFieldEnum = (typeof DetailSellerScalarFieldEnum)[keyof typeof DetailSellerScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    user_id: 'user_id',
    image_uri: 'image_uri',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    blog_id: 'blog_id',
    comment: 'comment',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    item_category_id: 'item_category_id',
    price: 'price',
    description: 'description',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemImageScalarFieldEnum: {
    id: 'id',
    item_id: 'item_id',
    uri: 'uri',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type ItemImageScalarFieldEnum = (typeof ItemImageScalarFieldEnum)[keyof typeof ItemImageScalarFieldEnum]


  export const ItemCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type ItemCategoryScalarFieldEnum = (typeof ItemCategoryScalarFieldEnum)[keyof typeof ItemCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: StringFilter<"role"> | string
    name?: StringFilter<"role"> | string
    created_at?: DateTimeFilter<"role"> | Date | string
    updated_at?: DateTimeFilter<"role"> | Date | string
    created_by?: StringFilter<"role"> | string
    updated_by?: StringFilter<"role"> | string
    users?: UserListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    users?: userOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    name?: StringFilter<"role"> | string
    created_at?: DateTimeFilter<"role"> | Date | string
    updated_at?: DateTimeFilter<"role"> | Date | string
    created_by?: StringFilter<"role"> | string
    updated_by?: StringFilter<"role"> | string
    users?: UserListRelationFilter
  }, "id">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"role"> | string
    name?: StringWithAggregatesFilter<"role"> | string
    created_at?: DateTimeWithAggregatesFilter<"role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"role"> | Date | string
    created_by?: StringWithAggregatesFilter<"role"> | string
    updated_by?: StringWithAggregatesFilter<"role"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profile_uri?: StringNullableFilter<"user"> | string | null
    address?: StringNullableFilter<"user"> | string | null
    role_id?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    created_by?: StringFilter<"user"> | string
    updated_by?: StringFilter<"user"> | string
    role?: XOR<RoleRelationFilter, roleWhereInput>
    items?: ItemListRelationFilter
    blogs?: BlogListRelationFilter
    comments?: CommentListRelationFilter
    detail_seller?: XOR<DetailSellerNullableRelationFilter, detailSellerWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_uri?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    role?: roleOrderByWithRelationInput
    items?: itemOrderByRelationAggregateInput
    blogs?: blogOrderByRelationAggregateInput
    comments?: commentOrderByRelationAggregateInput
    detail_seller?: detailSellerOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profile_uri?: StringNullableFilter<"user"> | string | null
    address?: StringNullableFilter<"user"> | string | null
    role_id?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    created_by?: StringFilter<"user"> | string
    updated_by?: StringFilter<"user"> | string
    role?: XOR<RoleRelationFilter, roleWhereInput>
    items?: ItemListRelationFilter
    blogs?: BlogListRelationFilter
    comments?: CommentListRelationFilter
    detail_seller?: XOR<DetailSellerNullableRelationFilter, detailSellerWhereInput> | null
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_uri?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    profile_uri?: StringNullableWithAggregatesFilter<"user"> | string | null
    address?: StringNullableWithAggregatesFilter<"user"> | string | null
    role_id?: StringWithAggregatesFilter<"user"> | string
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    created_by?: StringWithAggregatesFilter<"user"> | string
    updated_by?: StringWithAggregatesFilter<"user"> | string
  }

  export type detailSellerWhereInput = {
    AND?: detailSellerWhereInput | detailSellerWhereInput[]
    OR?: detailSellerWhereInput[]
    NOT?: detailSellerWhereInput | detailSellerWhereInput[]
    id?: StringFilter<"detailSeller"> | string
    user_id?: StringFilter<"detailSeller"> | string
    phone_number?: StringNullableFilter<"detailSeller"> | string | null
    description?: StringNullableFilter<"detailSeller"> | string | null
    created_at?: DateTimeFilter<"detailSeller"> | Date | string
    updated_at?: DateTimeFilter<"detailSeller"> | Date | string
    created_by?: StringFilter<"detailSeller"> | string
    updated_by?: StringFilter<"detailSeller"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type detailSellerOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type detailSellerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: detailSellerWhereInput | detailSellerWhereInput[]
    OR?: detailSellerWhereInput[]
    NOT?: detailSellerWhereInput | detailSellerWhereInput[]
    phone_number?: StringNullableFilter<"detailSeller"> | string | null
    description?: StringNullableFilter<"detailSeller"> | string | null
    created_at?: DateTimeFilter<"detailSeller"> | Date | string
    updated_at?: DateTimeFilter<"detailSeller"> | Date | string
    created_by?: StringFilter<"detailSeller"> | string
    updated_by?: StringFilter<"detailSeller"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id" | "user_id">

  export type detailSellerOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: detailSellerCountOrderByAggregateInput
    _max?: detailSellerMaxOrderByAggregateInput
    _min?: detailSellerMinOrderByAggregateInput
  }

  export type detailSellerScalarWhereWithAggregatesInput = {
    AND?: detailSellerScalarWhereWithAggregatesInput | detailSellerScalarWhereWithAggregatesInput[]
    OR?: detailSellerScalarWhereWithAggregatesInput[]
    NOT?: detailSellerScalarWhereWithAggregatesInput | detailSellerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"detailSeller"> | string
    user_id?: StringWithAggregatesFilter<"detailSeller"> | string
    phone_number?: StringNullableWithAggregatesFilter<"detailSeller"> | string | null
    description?: StringNullableWithAggregatesFilter<"detailSeller"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"detailSeller"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"detailSeller"> | Date | string
    created_by?: StringWithAggregatesFilter<"detailSeller"> | string
    updated_by?: StringWithAggregatesFilter<"detailSeller"> | string
  }

  export type blogWhereInput = {
    AND?: blogWhereInput | blogWhereInput[]
    OR?: blogWhereInput[]
    NOT?: blogWhereInput | blogWhereInput[]
    id?: StringFilter<"blog"> | string
    title?: StringFilter<"blog"> | string
    content?: StringFilter<"blog"> | string
    user_id?: StringFilter<"blog"> | string
    image_uri?: StringFilter<"blog"> | string
    created_at?: DateTimeFilter<"blog"> | Date | string
    updated_at?: DateTimeFilter<"blog"> | Date | string
    created_by?: StringFilter<"blog"> | string
    updated_by?: StringFilter<"blog"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
    comments?: CommentListRelationFilter
  }

  export type blogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    image_uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    user?: userOrderByWithRelationInput
    comments?: commentOrderByRelationAggregateInput
  }

  export type blogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: blogWhereInput | blogWhereInput[]
    OR?: blogWhereInput[]
    NOT?: blogWhereInput | blogWhereInput[]
    title?: StringFilter<"blog"> | string
    content?: StringFilter<"blog"> | string
    user_id?: StringFilter<"blog"> | string
    image_uri?: StringFilter<"blog"> | string
    created_at?: DateTimeFilter<"blog"> | Date | string
    updated_at?: DateTimeFilter<"blog"> | Date | string
    created_by?: StringFilter<"blog"> | string
    updated_by?: StringFilter<"blog"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
    comments?: CommentListRelationFilter
  }, "id">

  export type blogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    image_uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: blogCountOrderByAggregateInput
    _max?: blogMaxOrderByAggregateInput
    _min?: blogMinOrderByAggregateInput
  }

  export type blogScalarWhereWithAggregatesInput = {
    AND?: blogScalarWhereWithAggregatesInput | blogScalarWhereWithAggregatesInput[]
    OR?: blogScalarWhereWithAggregatesInput[]
    NOT?: blogScalarWhereWithAggregatesInput | blogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"blog"> | string
    title?: StringWithAggregatesFilter<"blog"> | string
    content?: StringWithAggregatesFilter<"blog"> | string
    user_id?: StringWithAggregatesFilter<"blog"> | string
    image_uri?: StringWithAggregatesFilter<"blog"> | string
    created_at?: DateTimeWithAggregatesFilter<"blog"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"blog"> | Date | string
    created_by?: StringWithAggregatesFilter<"blog"> | string
    updated_by?: StringWithAggregatesFilter<"blog"> | string
  }

  export type commentWhereInput = {
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    id?: StringFilter<"comment"> | string
    user_id?: StringFilter<"comment"> | string
    blog_id?: StringFilter<"comment"> | string
    comment?: StringFilter<"comment"> | string
    created_at?: DateTimeFilter<"comment"> | Date | string
    updated_at?: DateTimeFilter<"comment"> | Date | string
    created_by?: StringFilter<"comment"> | string
    updated_by?: StringFilter<"comment"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
    blog?: XOR<BlogRelationFilter, blogWhereInput>
  }

  export type commentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    blog_id?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    user?: userOrderByWithRelationInput
    blog?: blogOrderByWithRelationInput
  }

  export type commentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: commentWhereInput | commentWhereInput[]
    OR?: commentWhereInput[]
    NOT?: commentWhereInput | commentWhereInput[]
    user_id?: StringFilter<"comment"> | string
    blog_id?: StringFilter<"comment"> | string
    comment?: StringFilter<"comment"> | string
    created_at?: DateTimeFilter<"comment"> | Date | string
    updated_at?: DateTimeFilter<"comment"> | Date | string
    created_by?: StringFilter<"comment"> | string
    updated_by?: StringFilter<"comment"> | string
    user?: XOR<UserRelationFilter, userWhereInput>
    blog?: XOR<BlogRelationFilter, blogWhereInput>
  }, "id">

  export type commentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    blog_id?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: commentCountOrderByAggregateInput
    _max?: commentMaxOrderByAggregateInput
    _min?: commentMinOrderByAggregateInput
  }

  export type commentScalarWhereWithAggregatesInput = {
    AND?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    OR?: commentScalarWhereWithAggregatesInput[]
    NOT?: commentScalarWhereWithAggregatesInput | commentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"comment"> | string
    user_id?: StringWithAggregatesFilter<"comment"> | string
    blog_id?: StringWithAggregatesFilter<"comment"> | string
    comment?: StringWithAggregatesFilter<"comment"> | string
    created_at?: DateTimeWithAggregatesFilter<"comment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"comment"> | Date | string
    created_by?: StringWithAggregatesFilter<"comment"> | string
    updated_by?: StringWithAggregatesFilter<"comment"> | string
  }

  export type itemWhereInput = {
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    id?: StringFilter<"item"> | string
    user_id?: StringFilter<"item"> | string
    name?: StringFilter<"item"> | string
    item_category_id?: StringFilter<"item"> | string
    price?: IntFilter<"item"> | number
    description?: StringFilter<"item"> | string
    is_active?: BoolFilter<"item"> | boolean
    created_at?: DateTimeFilter<"item"> | Date | string
    updated_at?: DateTimeFilter<"item"> | Date | string
    created_by?: StringFilter<"item"> | string
    updated_by?: StringFilter<"item"> | string
    item_image?: ItemImageListRelationFilter
    item_category?: XOR<ItemCategoryRelationFilter, itemCategoryWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type itemOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    item_category_id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    item_image?: itemImageOrderByRelationAggregateInput
    item_category?: itemCategoryOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type itemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    user_id?: StringFilter<"item"> | string
    name?: StringFilter<"item"> | string
    item_category_id?: StringFilter<"item"> | string
    price?: IntFilter<"item"> | number
    description?: StringFilter<"item"> | string
    is_active?: BoolFilter<"item"> | boolean
    created_at?: DateTimeFilter<"item"> | Date | string
    updated_at?: DateTimeFilter<"item"> | Date | string
    created_by?: StringFilter<"item"> | string
    updated_by?: StringFilter<"item"> | string
    item_image?: ItemImageListRelationFilter
    item_category?: XOR<ItemCategoryRelationFilter, itemCategoryWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type itemOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    item_category_id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: itemCountOrderByAggregateInput
    _avg?: itemAvgOrderByAggregateInput
    _max?: itemMaxOrderByAggregateInput
    _min?: itemMinOrderByAggregateInput
    _sum?: itemSumOrderByAggregateInput
  }

  export type itemScalarWhereWithAggregatesInput = {
    AND?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    OR?: itemScalarWhereWithAggregatesInput[]
    NOT?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"item"> | string
    user_id?: StringWithAggregatesFilter<"item"> | string
    name?: StringWithAggregatesFilter<"item"> | string
    item_category_id?: StringWithAggregatesFilter<"item"> | string
    price?: IntWithAggregatesFilter<"item"> | number
    description?: StringWithAggregatesFilter<"item"> | string
    is_active?: BoolWithAggregatesFilter<"item"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"item"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"item"> | Date | string
    created_by?: StringWithAggregatesFilter<"item"> | string
    updated_by?: StringWithAggregatesFilter<"item"> | string
  }

  export type itemImageWhereInput = {
    AND?: itemImageWhereInput | itemImageWhereInput[]
    OR?: itemImageWhereInput[]
    NOT?: itemImageWhereInput | itemImageWhereInput[]
    id?: StringFilter<"itemImage"> | string
    item_id?: StringFilter<"itemImage"> | string
    uri?: StringFilter<"itemImage"> | string
    created_at?: DateTimeFilter<"itemImage"> | Date | string
    updated_at?: DateTimeFilter<"itemImage"> | Date | string
    created_by?: StringFilter<"itemImage"> | string
    updated_by?: StringFilter<"itemImage"> | string
    item?: XOR<ItemRelationFilter, itemWhereInput>
  }

  export type itemImageOrderByWithRelationInput = {
    id?: SortOrder
    item_id?: SortOrder
    uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    item?: itemOrderByWithRelationInput
  }

  export type itemImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: itemImageWhereInput | itemImageWhereInput[]
    OR?: itemImageWhereInput[]
    NOT?: itemImageWhereInput | itemImageWhereInput[]
    item_id?: StringFilter<"itemImage"> | string
    uri?: StringFilter<"itemImage"> | string
    created_at?: DateTimeFilter<"itemImage"> | Date | string
    updated_at?: DateTimeFilter<"itemImage"> | Date | string
    created_by?: StringFilter<"itemImage"> | string
    updated_by?: StringFilter<"itemImage"> | string
    item?: XOR<ItemRelationFilter, itemWhereInput>
  }, "id">

  export type itemImageOrderByWithAggregationInput = {
    id?: SortOrder
    item_id?: SortOrder
    uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: itemImageCountOrderByAggregateInput
    _max?: itemImageMaxOrderByAggregateInput
    _min?: itemImageMinOrderByAggregateInput
  }

  export type itemImageScalarWhereWithAggregatesInput = {
    AND?: itemImageScalarWhereWithAggregatesInput | itemImageScalarWhereWithAggregatesInput[]
    OR?: itemImageScalarWhereWithAggregatesInput[]
    NOT?: itemImageScalarWhereWithAggregatesInput | itemImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"itemImage"> | string
    item_id?: StringWithAggregatesFilter<"itemImage"> | string
    uri?: StringWithAggregatesFilter<"itemImage"> | string
    created_at?: DateTimeWithAggregatesFilter<"itemImage"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"itemImage"> | Date | string
    created_by?: StringWithAggregatesFilter<"itemImage"> | string
    updated_by?: StringWithAggregatesFilter<"itemImage"> | string
  }

  export type itemCategoryWhereInput = {
    AND?: itemCategoryWhereInput | itemCategoryWhereInput[]
    OR?: itemCategoryWhereInput[]
    NOT?: itemCategoryWhereInput | itemCategoryWhereInput[]
    id?: StringFilter<"itemCategory"> | string
    name?: StringFilter<"itemCategory"> | string
    created_at?: DateTimeFilter<"itemCategory"> | Date | string
    updated_at?: DateTimeFilter<"itemCategory"> | Date | string
    created_by?: StringFilter<"itemCategory"> | string
    updated_by?: StringFilter<"itemCategory"> | string
    items?: ItemListRelationFilter
  }

  export type itemCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    items?: itemOrderByRelationAggregateInput
  }

  export type itemCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: itemCategoryWhereInput | itemCategoryWhereInput[]
    OR?: itemCategoryWhereInput[]
    NOT?: itemCategoryWhereInput | itemCategoryWhereInput[]
    name?: StringFilter<"itemCategory"> | string
    created_at?: DateTimeFilter<"itemCategory"> | Date | string
    updated_at?: DateTimeFilter<"itemCategory"> | Date | string
    created_by?: StringFilter<"itemCategory"> | string
    updated_by?: StringFilter<"itemCategory"> | string
    items?: ItemListRelationFilter
  }, "id">

  export type itemCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: itemCategoryCountOrderByAggregateInput
    _max?: itemCategoryMaxOrderByAggregateInput
    _min?: itemCategoryMinOrderByAggregateInput
  }

  export type itemCategoryScalarWhereWithAggregatesInput = {
    AND?: itemCategoryScalarWhereWithAggregatesInput | itemCategoryScalarWhereWithAggregatesInput[]
    OR?: itemCategoryScalarWhereWithAggregatesInput[]
    NOT?: itemCategoryScalarWhereWithAggregatesInput | itemCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"itemCategory"> | string
    name?: StringWithAggregatesFilter<"itemCategory"> | string
    created_at?: DateTimeWithAggregatesFilter<"itemCategory"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"itemCategory"> | Date | string
    created_by?: StringWithAggregatesFilter<"itemCategory"> | string
    updated_by?: StringWithAggregatesFilter<"itemCategory"> | string
  }

  export type roleCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    users?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    users?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    users?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    users?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    role: roleCreateNestedOneWithoutUsersInput
    items?: itemCreateNestedManyWithoutUserInput
    blogs?: blogCreateNestedManyWithoutUserInput
    comments?: commentCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    role_id: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    items?: itemUncheckedCreateNestedManyWithoutUserInput
    blogs?: blogUncheckedCreateNestedManyWithoutUserInput
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    role?: roleUpdateOneRequiredWithoutUsersNestedInput
    items?: itemUpdateManyWithoutUserNestedInput
    blogs?: blogUpdateManyWithoutUserNestedInput
    comments?: commentUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutUserNestedInput
    blogs?: blogUncheckedUpdateManyWithoutUserNestedInput
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    role_id: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type detailSellerCreateInput = {
    id?: string
    phone_number?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    user: userCreateNestedOneWithoutDetail_sellerInput
  }

  export type detailSellerUncheckedCreateInput = {
    id?: string
    user_id: string
    phone_number?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type detailSellerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutDetail_sellerNestedInput
  }

  export type detailSellerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type detailSellerCreateManyInput = {
    id?: string
    user_id: string
    phone_number?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type detailSellerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type detailSellerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type blogCreateInput = {
    id?: string
    title: string
    content: string
    image_uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    user: userCreateNestedOneWithoutBlogsInput
    comments?: commentCreateNestedManyWithoutBlogInput
  }

  export type blogUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    user_id: string
    image_uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    comments?: commentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type blogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutBlogsNestedInput
    comments?: commentUpdateManyWithoutBlogNestedInput
  }

  export type blogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    image_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    comments?: commentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type blogCreateManyInput = {
    id?: string
    title: string
    content: string
    user_id: string
    image_uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type blogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type blogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    image_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateInput = {
    id?: string
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    user: userCreateNestedOneWithoutCommentsInput
    blog: blogCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateInput = {
    id?: string
    user_id: string
    blog_id: string
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type commentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutCommentsNestedInput
    blog?: blogUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    blog_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateManyInput = {
    id?: string
    user_id: string
    blog_id: string
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type commentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type commentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    blog_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemCreateInput = {
    id?: string
    name: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    item_image?: itemImageCreateNestedManyWithoutItemInput
    item_category: itemCategoryCreateNestedOneWithoutItemsInput
    user: userCreateNestedOneWithoutItemsInput
  }

  export type itemUncheckedCreateInput = {
    id?: string
    user_id: string
    name: string
    item_category_id: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    item_image?: itemImageUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    item_image?: itemImageUpdateManyWithoutItemNestedInput
    item_category?: itemCategoryUpdateOneRequiredWithoutItemsNestedInput
    user?: userUpdateOneRequiredWithoutItemsNestedInput
  }

  export type itemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    item_category_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    item_image?: itemImageUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemCreateManyInput = {
    id?: string
    user_id: string
    name: string
    item_category_id: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    item_category_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemImageCreateInput = {
    id?: string
    uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    item: itemCreateNestedOneWithoutItem_imageInput
  }

  export type itemImageUncheckedCreateInput = {
    id?: string
    item_id: string
    uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    item?: itemUpdateOneRequiredWithoutItem_imageNestedInput
  }

  export type itemImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemImageCreateManyInput = {
    id?: string
    item_id: string
    uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemCategoryCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    items?: itemCreateNestedManyWithoutItem_categoryInput
  }

  export type itemCategoryUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    items?: itemUncheckedCreateNestedManyWithoutItem_categoryInput
  }

  export type itemCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    items?: itemUpdateManyWithoutItem_categoryNestedInput
  }

  export type itemCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutItem_categoryNestedInput
  }

  export type itemCategoryCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoleRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type ItemListRelationFilter = {
    every?: itemWhereInput
    some?: itemWhereInput
    none?: itemWhereInput
  }

  export type BlogListRelationFilter = {
    every?: blogWhereInput
    some?: blogWhereInput
    none?: blogWhereInput
  }

  export type CommentListRelationFilter = {
    every?: commentWhereInput
    some?: commentWhereInput
    none?: commentWhereInput
  }

  export type DetailSellerNullableRelationFilter = {
    is?: detailSellerWhereInput | null
    isNot?: detailSellerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_uri?: SortOrder
    address?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_uri?: SortOrder
    address?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_uri?: SortOrder
    address?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type detailSellerCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type detailSellerMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type detailSellerMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone_number?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type blogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    image_uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type blogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    image_uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type blogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    user_id?: SortOrder
    image_uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type BlogRelationFilter = {
    is?: blogWhereInput
    isNot?: blogWhereInput
  }

  export type commentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    blog_id?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type commentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    blog_id?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type commentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    blog_id?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ItemImageListRelationFilter = {
    every?: itemImageWhereInput
    some?: itemImageWhereInput
    none?: itemImageWhereInput
  }

  export type ItemCategoryRelationFilter = {
    is?: itemCategoryWhereInput
    isNot?: itemCategoryWhereInput
  }

  export type itemImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type itemCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    item_category_id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type itemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type itemMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    item_category_id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type itemMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    item_category_id?: SortOrder
    price?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type itemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ItemRelationFilter = {
    is?: itemWhereInput
    isNot?: itemWhereInput
  }

  export type itemImageCountOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type itemImageMaxOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type itemImageMinOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    uri?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type itemCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type itemCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type itemCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type userCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type roleCreateNestedOneWithoutUsersInput = {
    create?: XOR<roleCreateWithoutUsersInput, roleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: roleCreateOrConnectWithoutUsersInput
    connect?: roleWhereUniqueInput
  }

  export type itemCreateNestedManyWithoutUserInput = {
    create?: XOR<itemCreateWithoutUserInput, itemUncheckedCreateWithoutUserInput> | itemCreateWithoutUserInput[] | itemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: itemCreateOrConnectWithoutUserInput | itemCreateOrConnectWithoutUserInput[]
    createMany?: itemCreateManyUserInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type blogCreateNestedManyWithoutUserInput = {
    create?: XOR<blogCreateWithoutUserInput, blogUncheckedCreateWithoutUserInput> | blogCreateWithoutUserInput[] | blogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blogCreateOrConnectWithoutUserInput | blogCreateOrConnectWithoutUserInput[]
    createMany?: blogCreateManyUserInputEnvelope
    connect?: blogWhereUniqueInput | blogWhereUniqueInput[]
  }

  export type commentCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type detailSellerCreateNestedOneWithoutUserInput = {
    create?: XOR<detailSellerCreateWithoutUserInput, detailSellerUncheckedCreateWithoutUserInput>
    connectOrCreate?: detailSellerCreateOrConnectWithoutUserInput
    connect?: detailSellerWhereUniqueInput
  }

  export type itemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<itemCreateWithoutUserInput, itemUncheckedCreateWithoutUserInput> | itemCreateWithoutUserInput[] | itemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: itemCreateOrConnectWithoutUserInput | itemCreateOrConnectWithoutUserInput[]
    createMany?: itemCreateManyUserInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type blogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<blogCreateWithoutUserInput, blogUncheckedCreateWithoutUserInput> | blogCreateWithoutUserInput[] | blogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blogCreateOrConnectWithoutUserInput | blogCreateOrConnectWithoutUserInput[]
    createMany?: blogCreateManyUserInputEnvelope
    connect?: blogWhereUniqueInput | blogWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type detailSellerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<detailSellerCreateWithoutUserInput, detailSellerUncheckedCreateWithoutUserInput>
    connectOrCreate?: detailSellerCreateOrConnectWithoutUserInput
    connect?: detailSellerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type roleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<roleCreateWithoutUsersInput, roleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: roleCreateOrConnectWithoutUsersInput
    upsert?: roleUpsertWithoutUsersInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUsersInput, roleUpdateWithoutUsersInput>, roleUncheckedUpdateWithoutUsersInput>
  }

  export type itemUpdateManyWithoutUserNestedInput = {
    create?: XOR<itemCreateWithoutUserInput, itemUncheckedCreateWithoutUserInput> | itemCreateWithoutUserInput[] | itemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: itemCreateOrConnectWithoutUserInput | itemCreateOrConnectWithoutUserInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutUserInput | itemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: itemCreateManyUserInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutUserInput | itemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: itemUpdateManyWithWhereWithoutUserInput | itemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type blogUpdateManyWithoutUserNestedInput = {
    create?: XOR<blogCreateWithoutUserInput, blogUncheckedCreateWithoutUserInput> | blogCreateWithoutUserInput[] | blogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blogCreateOrConnectWithoutUserInput | blogCreateOrConnectWithoutUserInput[]
    upsert?: blogUpsertWithWhereUniqueWithoutUserInput | blogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blogCreateManyUserInputEnvelope
    set?: blogWhereUniqueInput | blogWhereUniqueInput[]
    disconnect?: blogWhereUniqueInput | blogWhereUniqueInput[]
    delete?: blogWhereUniqueInput | blogWhereUniqueInput[]
    connect?: blogWhereUniqueInput | blogWhereUniqueInput[]
    update?: blogUpdateWithWhereUniqueWithoutUserInput | blogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blogUpdateManyWithWhereWithoutUserInput | blogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blogScalarWhereInput | blogScalarWhereInput[]
  }

  export type commentUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type detailSellerUpdateOneWithoutUserNestedInput = {
    create?: XOR<detailSellerCreateWithoutUserInput, detailSellerUncheckedCreateWithoutUserInput>
    connectOrCreate?: detailSellerCreateOrConnectWithoutUserInput
    upsert?: detailSellerUpsertWithoutUserInput
    disconnect?: detailSellerWhereInput | boolean
    delete?: detailSellerWhereInput | boolean
    connect?: detailSellerWhereUniqueInput
    update?: XOR<XOR<detailSellerUpdateToOneWithWhereWithoutUserInput, detailSellerUpdateWithoutUserInput>, detailSellerUncheckedUpdateWithoutUserInput>
  }

  export type itemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<itemCreateWithoutUserInput, itemUncheckedCreateWithoutUserInput> | itemCreateWithoutUserInput[] | itemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: itemCreateOrConnectWithoutUserInput | itemCreateOrConnectWithoutUserInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutUserInput | itemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: itemCreateManyUserInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutUserInput | itemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: itemUpdateManyWithWhereWithoutUserInput | itemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type blogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<blogCreateWithoutUserInput, blogUncheckedCreateWithoutUserInput> | blogCreateWithoutUserInput[] | blogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blogCreateOrConnectWithoutUserInput | blogCreateOrConnectWithoutUserInput[]
    upsert?: blogUpsertWithWhereUniqueWithoutUserInput | blogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blogCreateManyUserInputEnvelope
    set?: blogWhereUniqueInput | blogWhereUniqueInput[]
    disconnect?: blogWhereUniqueInput | blogWhereUniqueInput[]
    delete?: blogWhereUniqueInput | blogWhereUniqueInput[]
    connect?: blogWhereUniqueInput | blogWhereUniqueInput[]
    update?: blogUpdateWithWhereUniqueWithoutUserInput | blogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blogUpdateManyWithWhereWithoutUserInput | blogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blogScalarWhereInput | blogScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput> | commentCreateWithoutUserInput[] | commentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: commentCreateOrConnectWithoutUserInput | commentCreateOrConnectWithoutUserInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutUserInput | commentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: commentCreateManyUserInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutUserInput | commentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: commentUpdateManyWithWhereWithoutUserInput | commentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type detailSellerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<detailSellerCreateWithoutUserInput, detailSellerUncheckedCreateWithoutUserInput>
    connectOrCreate?: detailSellerCreateOrConnectWithoutUserInput
    upsert?: detailSellerUpsertWithoutUserInput
    disconnect?: detailSellerWhereInput | boolean
    delete?: detailSellerWhereInput | boolean
    connect?: detailSellerWhereUniqueInput
    update?: XOR<XOR<detailSellerUpdateToOneWithWhereWithoutUserInput, detailSellerUpdateWithoutUserInput>, detailSellerUncheckedUpdateWithoutUserInput>
  }

  export type userCreateNestedOneWithoutDetail_sellerInput = {
    create?: XOR<userCreateWithoutDetail_sellerInput, userUncheckedCreateWithoutDetail_sellerInput>
    connectOrCreate?: userCreateOrConnectWithoutDetail_sellerInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutDetail_sellerNestedInput = {
    create?: XOR<userCreateWithoutDetail_sellerInput, userUncheckedCreateWithoutDetail_sellerInput>
    connectOrCreate?: userCreateOrConnectWithoutDetail_sellerInput
    upsert?: userUpsertWithoutDetail_sellerInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDetail_sellerInput, userUpdateWithoutDetail_sellerInput>, userUncheckedUpdateWithoutDetail_sellerInput>
  }

  export type userCreateNestedOneWithoutBlogsInput = {
    create?: XOR<userCreateWithoutBlogsInput, userUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: userCreateOrConnectWithoutBlogsInput
    connect?: userWhereUniqueInput
  }

  export type commentCreateNestedManyWithoutBlogInput = {
    create?: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput> | commentCreateWithoutBlogInput[] | commentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: commentCreateOrConnectWithoutBlogInput | commentCreateOrConnectWithoutBlogInput[]
    createMany?: commentCreateManyBlogInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type commentUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput> | commentCreateWithoutBlogInput[] | commentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: commentCreateOrConnectWithoutBlogInput | commentCreateOrConnectWithoutBlogInput[]
    createMany?: commentCreateManyBlogInputEnvelope
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<userCreateWithoutBlogsInput, userUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: userCreateOrConnectWithoutBlogsInput
    upsert?: userUpsertWithoutBlogsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBlogsInput, userUpdateWithoutBlogsInput>, userUncheckedUpdateWithoutBlogsInput>
  }

  export type commentUpdateManyWithoutBlogNestedInput = {
    create?: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput> | commentCreateWithoutBlogInput[] | commentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: commentCreateOrConnectWithoutBlogInput | commentCreateOrConnectWithoutBlogInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutBlogInput | commentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: commentCreateManyBlogInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutBlogInput | commentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: commentUpdateManyWithWhereWithoutBlogInput | commentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type commentUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput> | commentCreateWithoutBlogInput[] | commentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: commentCreateOrConnectWithoutBlogInput | commentCreateOrConnectWithoutBlogInput[]
    upsert?: commentUpsertWithWhereUniqueWithoutBlogInput | commentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: commentCreateManyBlogInputEnvelope
    set?: commentWhereUniqueInput | commentWhereUniqueInput[]
    disconnect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    delete?: commentWhereUniqueInput | commentWhereUniqueInput[]
    connect?: commentWhereUniqueInput | commentWhereUniqueInput[]
    update?: commentUpdateWithWhereUniqueWithoutBlogInput | commentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: commentUpdateManyWithWhereWithoutBlogInput | commentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: commentScalarWhereInput | commentScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCommentsInput = {
    create?: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentsInput
    connect?: userWhereUniqueInput
  }

  export type blogCreateNestedOneWithoutCommentsInput = {
    create?: XOR<blogCreateWithoutCommentsInput, blogUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: blogCreateOrConnectWithoutCommentsInput
    connect?: blogWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: userCreateOrConnectWithoutCommentsInput
    upsert?: userUpsertWithoutCommentsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCommentsInput, userUpdateWithoutCommentsInput>, userUncheckedUpdateWithoutCommentsInput>
  }

  export type blogUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<blogCreateWithoutCommentsInput, blogUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: blogCreateOrConnectWithoutCommentsInput
    upsert?: blogUpsertWithoutCommentsInput
    connect?: blogWhereUniqueInput
    update?: XOR<XOR<blogUpdateToOneWithWhereWithoutCommentsInput, blogUpdateWithoutCommentsInput>, blogUncheckedUpdateWithoutCommentsInput>
  }

  export type itemImageCreateNestedManyWithoutItemInput = {
    create?: XOR<itemImageCreateWithoutItemInput, itemImageUncheckedCreateWithoutItemInput> | itemImageCreateWithoutItemInput[] | itemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: itemImageCreateOrConnectWithoutItemInput | itemImageCreateOrConnectWithoutItemInput[]
    createMany?: itemImageCreateManyItemInputEnvelope
    connect?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
  }

  export type itemCategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<itemCategoryCreateWithoutItemsInput, itemCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: itemCategoryCreateOrConnectWithoutItemsInput
    connect?: itemCategoryWhereUniqueInput
  }

  export type userCreateNestedOneWithoutItemsInput = {
    create?: XOR<userCreateWithoutItemsInput, userUncheckedCreateWithoutItemsInput>
    connectOrCreate?: userCreateOrConnectWithoutItemsInput
    connect?: userWhereUniqueInput
  }

  export type itemImageUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<itemImageCreateWithoutItemInput, itemImageUncheckedCreateWithoutItemInput> | itemImageCreateWithoutItemInput[] | itemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: itemImageCreateOrConnectWithoutItemInput | itemImageCreateOrConnectWithoutItemInput[]
    createMany?: itemImageCreateManyItemInputEnvelope
    connect?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type itemImageUpdateManyWithoutItemNestedInput = {
    create?: XOR<itemImageCreateWithoutItemInput, itemImageUncheckedCreateWithoutItemInput> | itemImageCreateWithoutItemInput[] | itemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: itemImageCreateOrConnectWithoutItemInput | itemImageCreateOrConnectWithoutItemInput[]
    upsert?: itemImageUpsertWithWhereUniqueWithoutItemInput | itemImageUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: itemImageCreateManyItemInputEnvelope
    set?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
    disconnect?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
    delete?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
    connect?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
    update?: itemImageUpdateWithWhereUniqueWithoutItemInput | itemImageUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: itemImageUpdateManyWithWhereWithoutItemInput | itemImageUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: itemImageScalarWhereInput | itemImageScalarWhereInput[]
  }

  export type itemCategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<itemCategoryCreateWithoutItemsInput, itemCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: itemCategoryCreateOrConnectWithoutItemsInput
    upsert?: itemCategoryUpsertWithoutItemsInput
    connect?: itemCategoryWhereUniqueInput
    update?: XOR<XOR<itemCategoryUpdateToOneWithWhereWithoutItemsInput, itemCategoryUpdateWithoutItemsInput>, itemCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type userUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<userCreateWithoutItemsInput, userUncheckedCreateWithoutItemsInput>
    connectOrCreate?: userCreateOrConnectWithoutItemsInput
    upsert?: userUpsertWithoutItemsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutItemsInput, userUpdateWithoutItemsInput>, userUncheckedUpdateWithoutItemsInput>
  }

  export type itemImageUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<itemImageCreateWithoutItemInput, itemImageUncheckedCreateWithoutItemInput> | itemImageCreateWithoutItemInput[] | itemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: itemImageCreateOrConnectWithoutItemInput | itemImageCreateOrConnectWithoutItemInput[]
    upsert?: itemImageUpsertWithWhereUniqueWithoutItemInput | itemImageUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: itemImageCreateManyItemInputEnvelope
    set?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
    disconnect?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
    delete?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
    connect?: itemImageWhereUniqueInput | itemImageWhereUniqueInput[]
    update?: itemImageUpdateWithWhereUniqueWithoutItemInput | itemImageUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: itemImageUpdateManyWithWhereWithoutItemInput | itemImageUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: itemImageScalarWhereInput | itemImageScalarWhereInput[]
  }

  export type itemCreateNestedOneWithoutItem_imageInput = {
    create?: XOR<itemCreateWithoutItem_imageInput, itemUncheckedCreateWithoutItem_imageInput>
    connectOrCreate?: itemCreateOrConnectWithoutItem_imageInput
    connect?: itemWhereUniqueInput
  }

  export type itemUpdateOneRequiredWithoutItem_imageNestedInput = {
    create?: XOR<itemCreateWithoutItem_imageInput, itemUncheckedCreateWithoutItem_imageInput>
    connectOrCreate?: itemCreateOrConnectWithoutItem_imageInput
    upsert?: itemUpsertWithoutItem_imageInput
    connect?: itemWhereUniqueInput
    update?: XOR<XOR<itemUpdateToOneWithWhereWithoutItem_imageInput, itemUpdateWithoutItem_imageInput>, itemUncheckedUpdateWithoutItem_imageInput>
  }

  export type itemCreateNestedManyWithoutItem_categoryInput = {
    create?: XOR<itemCreateWithoutItem_categoryInput, itemUncheckedCreateWithoutItem_categoryInput> | itemCreateWithoutItem_categoryInput[] | itemUncheckedCreateWithoutItem_categoryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_categoryInput | itemCreateOrConnectWithoutItem_categoryInput[]
    createMany?: itemCreateManyItem_categoryInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutItem_categoryInput = {
    create?: XOR<itemCreateWithoutItem_categoryInput, itemUncheckedCreateWithoutItem_categoryInput> | itemCreateWithoutItem_categoryInput[] | itemUncheckedCreateWithoutItem_categoryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_categoryInput | itemCreateOrConnectWithoutItem_categoryInput[]
    createMany?: itemCreateManyItem_categoryInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type itemUpdateManyWithoutItem_categoryNestedInput = {
    create?: XOR<itemCreateWithoutItem_categoryInput, itemUncheckedCreateWithoutItem_categoryInput> | itemCreateWithoutItem_categoryInput[] | itemUncheckedCreateWithoutItem_categoryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_categoryInput | itemCreateOrConnectWithoutItem_categoryInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutItem_categoryInput | itemUpsertWithWhereUniqueWithoutItem_categoryInput[]
    createMany?: itemCreateManyItem_categoryInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutItem_categoryInput | itemUpdateWithWhereUniqueWithoutItem_categoryInput[]
    updateMany?: itemUpdateManyWithWhereWithoutItem_categoryInput | itemUpdateManyWithWhereWithoutItem_categoryInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type itemUncheckedUpdateManyWithoutItem_categoryNestedInput = {
    create?: XOR<itemCreateWithoutItem_categoryInput, itemUncheckedCreateWithoutItem_categoryInput> | itemCreateWithoutItem_categoryInput[] | itemUncheckedCreateWithoutItem_categoryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutItem_categoryInput | itemCreateOrConnectWithoutItem_categoryInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutItem_categoryInput | itemUpsertWithWhereUniqueWithoutItem_categoryInput[]
    createMany?: itemCreateManyItem_categoryInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutItem_categoryInput | itemUpdateWithWhereUniqueWithoutItem_categoryInput[]
    updateMany?: itemUpdateManyWithWhereWithoutItem_categoryInput | itemUpdateManyWithWhereWithoutItem_categoryInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type userCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    items?: itemCreateNestedManyWithoutUserInput
    blogs?: blogCreateNestedManyWithoutUserInput
    comments?: commentCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    items?: itemUncheckedCreateNestedManyWithoutUserInput
    blogs?: blogUncheckedCreateNestedManyWithoutUserInput
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutRoleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userCreateManyRoleInputEnvelope = {
    data: userCreateManyRoleInput | userCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userUpdateWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
  }

  export type userUpdateManyWithWhereWithoutRoleInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutRoleInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profile_uri?: StringNullableFilter<"user"> | string | null
    address?: StringNullableFilter<"user"> | string | null
    role_id?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    created_by?: StringFilter<"user"> | string
    updated_by?: StringFilter<"user"> | string
  }

  export type roleCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type roleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type roleCreateOrConnectWithoutUsersInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUsersInput, roleUncheckedCreateWithoutUsersInput>
  }

  export type itemCreateWithoutUserInput = {
    id?: string
    name: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    item_image?: itemImageCreateNestedManyWithoutItemInput
    item_category: itemCategoryCreateNestedOneWithoutItemsInput
  }

  export type itemUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    item_category_id: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    item_image?: itemImageUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemCreateOrConnectWithoutUserInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutUserInput, itemUncheckedCreateWithoutUserInput>
  }

  export type itemCreateManyUserInputEnvelope = {
    data: itemCreateManyUserInput | itemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type blogCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    image_uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    comments?: commentCreateNestedManyWithoutBlogInput
  }

  export type blogUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    image_uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    comments?: commentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type blogCreateOrConnectWithoutUserInput = {
    where: blogWhereUniqueInput
    create: XOR<blogCreateWithoutUserInput, blogUncheckedCreateWithoutUserInput>
  }

  export type blogCreateManyUserInputEnvelope = {
    data: blogCreateManyUserInput | blogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type commentCreateWithoutUserInput = {
    id?: string
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    blog: blogCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateWithoutUserInput = {
    id?: string
    blog_id: string
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type commentCreateOrConnectWithoutUserInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentCreateManyUserInputEnvelope = {
    data: commentCreateManyUserInput | commentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type detailSellerCreateWithoutUserInput = {
    id?: string
    phone_number?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type detailSellerUncheckedCreateWithoutUserInput = {
    id?: string
    phone_number?: string | null
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type detailSellerCreateOrConnectWithoutUserInput = {
    where: detailSellerWhereUniqueInput
    create: XOR<detailSellerCreateWithoutUserInput, detailSellerUncheckedCreateWithoutUserInput>
  }

  export type roleUpsertWithoutUsersInput = {
    update: XOR<roleUpdateWithoutUsersInput, roleUncheckedUpdateWithoutUsersInput>
    create: XOR<roleCreateWithoutUsersInput, roleUncheckedCreateWithoutUsersInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUsersInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUsersInput, roleUncheckedUpdateWithoutUsersInput>
  }

  export type roleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemUpsertWithWhereUniqueWithoutUserInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutUserInput, itemUncheckedUpdateWithoutUserInput>
    create: XOR<itemCreateWithoutUserInput, itemUncheckedCreateWithoutUserInput>
  }

  export type itemUpdateWithWhereUniqueWithoutUserInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutUserInput, itemUncheckedUpdateWithoutUserInput>
  }

  export type itemUpdateManyWithWhereWithoutUserInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutUserInput>
  }

  export type itemScalarWhereInput = {
    AND?: itemScalarWhereInput | itemScalarWhereInput[]
    OR?: itemScalarWhereInput[]
    NOT?: itemScalarWhereInput | itemScalarWhereInput[]
    id?: StringFilter<"item"> | string
    user_id?: StringFilter<"item"> | string
    name?: StringFilter<"item"> | string
    item_category_id?: StringFilter<"item"> | string
    price?: IntFilter<"item"> | number
    description?: StringFilter<"item"> | string
    is_active?: BoolFilter<"item"> | boolean
    created_at?: DateTimeFilter<"item"> | Date | string
    updated_at?: DateTimeFilter<"item"> | Date | string
    created_by?: StringFilter<"item"> | string
    updated_by?: StringFilter<"item"> | string
  }

  export type blogUpsertWithWhereUniqueWithoutUserInput = {
    where: blogWhereUniqueInput
    update: XOR<blogUpdateWithoutUserInput, blogUncheckedUpdateWithoutUserInput>
    create: XOR<blogCreateWithoutUserInput, blogUncheckedCreateWithoutUserInput>
  }

  export type blogUpdateWithWhereUniqueWithoutUserInput = {
    where: blogWhereUniqueInput
    data: XOR<blogUpdateWithoutUserInput, blogUncheckedUpdateWithoutUserInput>
  }

  export type blogUpdateManyWithWhereWithoutUserInput = {
    where: blogScalarWhereInput
    data: XOR<blogUpdateManyMutationInput, blogUncheckedUpdateManyWithoutUserInput>
  }

  export type blogScalarWhereInput = {
    AND?: blogScalarWhereInput | blogScalarWhereInput[]
    OR?: blogScalarWhereInput[]
    NOT?: blogScalarWhereInput | blogScalarWhereInput[]
    id?: StringFilter<"blog"> | string
    title?: StringFilter<"blog"> | string
    content?: StringFilter<"blog"> | string
    user_id?: StringFilter<"blog"> | string
    image_uri?: StringFilter<"blog"> | string
    created_at?: DateTimeFilter<"blog"> | Date | string
    updated_at?: DateTimeFilter<"blog"> | Date | string
    created_by?: StringFilter<"blog"> | string
    updated_by?: StringFilter<"blog"> | string
  }

  export type commentUpsertWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
    create: XOR<commentCreateWithoutUserInput, commentUncheckedCreateWithoutUserInput>
  }

  export type commentUpdateWithWhereUniqueWithoutUserInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutUserInput, commentUncheckedUpdateWithoutUserInput>
  }

  export type commentUpdateManyWithWhereWithoutUserInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutUserInput>
  }

  export type commentScalarWhereInput = {
    AND?: commentScalarWhereInput | commentScalarWhereInput[]
    OR?: commentScalarWhereInput[]
    NOT?: commentScalarWhereInput | commentScalarWhereInput[]
    id?: StringFilter<"comment"> | string
    user_id?: StringFilter<"comment"> | string
    blog_id?: StringFilter<"comment"> | string
    comment?: StringFilter<"comment"> | string
    created_at?: DateTimeFilter<"comment"> | Date | string
    updated_at?: DateTimeFilter<"comment"> | Date | string
    created_by?: StringFilter<"comment"> | string
    updated_by?: StringFilter<"comment"> | string
  }

  export type detailSellerUpsertWithoutUserInput = {
    update: XOR<detailSellerUpdateWithoutUserInput, detailSellerUncheckedUpdateWithoutUserInput>
    create: XOR<detailSellerCreateWithoutUserInput, detailSellerUncheckedCreateWithoutUserInput>
    where?: detailSellerWhereInput
  }

  export type detailSellerUpdateToOneWithWhereWithoutUserInput = {
    where?: detailSellerWhereInput
    data: XOR<detailSellerUpdateWithoutUserInput, detailSellerUncheckedUpdateWithoutUserInput>
  }

  export type detailSellerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type detailSellerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateWithoutDetail_sellerInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    role: roleCreateNestedOneWithoutUsersInput
    items?: itemCreateNestedManyWithoutUserInput
    blogs?: blogCreateNestedManyWithoutUserInput
    comments?: commentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutDetail_sellerInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    role_id: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    items?: itemUncheckedCreateNestedManyWithoutUserInput
    blogs?: blogUncheckedCreateNestedManyWithoutUserInput
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutDetail_sellerInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDetail_sellerInput, userUncheckedCreateWithoutDetail_sellerInput>
  }

  export type userUpsertWithoutDetail_sellerInput = {
    update: XOR<userUpdateWithoutDetail_sellerInput, userUncheckedUpdateWithoutDetail_sellerInput>
    create: XOR<userCreateWithoutDetail_sellerInput, userUncheckedCreateWithoutDetail_sellerInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDetail_sellerInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDetail_sellerInput, userUncheckedUpdateWithoutDetail_sellerInput>
  }

  export type userUpdateWithoutDetail_sellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    role?: roleUpdateOneRequiredWithoutUsersNestedInput
    items?: itemUpdateManyWithoutUserNestedInput
    blogs?: blogUpdateManyWithoutUserNestedInput
    comments?: commentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDetail_sellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutUserNestedInput
    blogs?: blogUncheckedUpdateManyWithoutUserNestedInput
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutBlogsInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    role: roleCreateNestedOneWithoutUsersInput
    items?: itemCreateNestedManyWithoutUserInput
    comments?: commentCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    role_id: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    items?: itemUncheckedCreateNestedManyWithoutUserInput
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutBlogsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBlogsInput, userUncheckedCreateWithoutBlogsInput>
  }

  export type commentCreateWithoutBlogInput = {
    id?: string
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    user: userCreateNestedOneWithoutCommentsInput
  }

  export type commentUncheckedCreateWithoutBlogInput = {
    id?: string
    user_id: string
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type commentCreateOrConnectWithoutBlogInput = {
    where: commentWhereUniqueInput
    create: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput>
  }

  export type commentCreateManyBlogInputEnvelope = {
    data: commentCreateManyBlogInput | commentCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutBlogsInput = {
    update: XOR<userUpdateWithoutBlogsInput, userUncheckedUpdateWithoutBlogsInput>
    create: XOR<userCreateWithoutBlogsInput, userUncheckedCreateWithoutBlogsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBlogsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBlogsInput, userUncheckedUpdateWithoutBlogsInput>
  }

  export type userUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    role?: roleUpdateOneRequiredWithoutUsersNestedInput
    items?: itemUpdateManyWithoutUserNestedInput
    comments?: commentUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutUserNestedInput
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type commentUpsertWithWhereUniqueWithoutBlogInput = {
    where: commentWhereUniqueInput
    update: XOR<commentUpdateWithoutBlogInput, commentUncheckedUpdateWithoutBlogInput>
    create: XOR<commentCreateWithoutBlogInput, commentUncheckedCreateWithoutBlogInput>
  }

  export type commentUpdateWithWhereUniqueWithoutBlogInput = {
    where: commentWhereUniqueInput
    data: XOR<commentUpdateWithoutBlogInput, commentUncheckedUpdateWithoutBlogInput>
  }

  export type commentUpdateManyWithWhereWithoutBlogInput = {
    where: commentScalarWhereInput
    data: XOR<commentUpdateManyMutationInput, commentUncheckedUpdateManyWithoutBlogInput>
  }

  export type userCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    role: roleCreateNestedOneWithoutUsersInput
    items?: itemCreateNestedManyWithoutUserInput
    blogs?: blogCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    role_id: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    items?: itemUncheckedCreateNestedManyWithoutUserInput
    blogs?: blogUncheckedCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutCommentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
  }

  export type blogCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    image_uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    user: userCreateNestedOneWithoutBlogsInput
  }

  export type blogUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    content: string
    user_id: string
    image_uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type blogCreateOrConnectWithoutCommentsInput = {
    where: blogWhereUniqueInput
    create: XOR<blogCreateWithoutCommentsInput, blogUncheckedCreateWithoutCommentsInput>
  }

  export type userUpsertWithoutCommentsInput = {
    update: XOR<userUpdateWithoutCommentsInput, userUncheckedUpdateWithoutCommentsInput>
    create: XOR<userCreateWithoutCommentsInput, userUncheckedCreateWithoutCommentsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCommentsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCommentsInput, userUncheckedUpdateWithoutCommentsInput>
  }

  export type userUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    role?: roleUpdateOneRequiredWithoutUsersNestedInput
    items?: itemUpdateManyWithoutUserNestedInput
    blogs?: blogUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutUserNestedInput
    blogs?: blogUncheckedUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type blogUpsertWithoutCommentsInput = {
    update: XOR<blogUpdateWithoutCommentsInput, blogUncheckedUpdateWithoutCommentsInput>
    create: XOR<blogCreateWithoutCommentsInput, blogUncheckedCreateWithoutCommentsInput>
    where?: blogWhereInput
  }

  export type blogUpdateToOneWithWhereWithoutCommentsInput = {
    where?: blogWhereInput
    data: XOR<blogUpdateWithoutCommentsInput, blogUncheckedUpdateWithoutCommentsInput>
  }

  export type blogUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type blogUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    image_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemImageCreateWithoutItemInput = {
    id?: string
    uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemImageUncheckedCreateWithoutItemInput = {
    id?: string
    uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemImageCreateOrConnectWithoutItemInput = {
    where: itemImageWhereUniqueInput
    create: XOR<itemImageCreateWithoutItemInput, itemImageUncheckedCreateWithoutItemInput>
  }

  export type itemImageCreateManyItemInputEnvelope = {
    data: itemImageCreateManyItemInput | itemImageCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type itemCategoryCreateWithoutItemsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemCategoryUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemCategoryCreateOrConnectWithoutItemsInput = {
    where: itemCategoryWhereUniqueInput
    create: XOR<itemCategoryCreateWithoutItemsInput, itemCategoryUncheckedCreateWithoutItemsInput>
  }

  export type userCreateWithoutItemsInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    role: roleCreateNestedOneWithoutUsersInput
    blogs?: blogCreateNestedManyWithoutUserInput
    comments?: commentCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    role_id: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    blogs?: blogUncheckedCreateNestedManyWithoutUserInput
    comments?: commentUncheckedCreateNestedManyWithoutUserInput
    detail_seller?: detailSellerUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutItemsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutItemsInput, userUncheckedCreateWithoutItemsInput>
  }

  export type itemImageUpsertWithWhereUniqueWithoutItemInput = {
    where: itemImageWhereUniqueInput
    update: XOR<itemImageUpdateWithoutItemInput, itemImageUncheckedUpdateWithoutItemInput>
    create: XOR<itemImageCreateWithoutItemInput, itemImageUncheckedCreateWithoutItemInput>
  }

  export type itemImageUpdateWithWhereUniqueWithoutItemInput = {
    where: itemImageWhereUniqueInput
    data: XOR<itemImageUpdateWithoutItemInput, itemImageUncheckedUpdateWithoutItemInput>
  }

  export type itemImageUpdateManyWithWhereWithoutItemInput = {
    where: itemImageScalarWhereInput
    data: XOR<itemImageUpdateManyMutationInput, itemImageUncheckedUpdateManyWithoutItemInput>
  }

  export type itemImageScalarWhereInput = {
    AND?: itemImageScalarWhereInput | itemImageScalarWhereInput[]
    OR?: itemImageScalarWhereInput[]
    NOT?: itemImageScalarWhereInput | itemImageScalarWhereInput[]
    id?: StringFilter<"itemImage"> | string
    item_id?: StringFilter<"itemImage"> | string
    uri?: StringFilter<"itemImage"> | string
    created_at?: DateTimeFilter<"itemImage"> | Date | string
    updated_at?: DateTimeFilter<"itemImage"> | Date | string
    created_by?: StringFilter<"itemImage"> | string
    updated_by?: StringFilter<"itemImage"> | string
  }

  export type itemCategoryUpsertWithoutItemsInput = {
    update: XOR<itemCategoryUpdateWithoutItemsInput, itemCategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<itemCategoryCreateWithoutItemsInput, itemCategoryUncheckedCreateWithoutItemsInput>
    where?: itemCategoryWhereInput
  }

  export type itemCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: itemCategoryWhereInput
    data: XOR<itemCategoryUpdateWithoutItemsInput, itemCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type itemCategoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemCategoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutItemsInput = {
    update: XOR<userUpdateWithoutItemsInput, userUncheckedUpdateWithoutItemsInput>
    create: XOR<userCreateWithoutItemsInput, userUncheckedCreateWithoutItemsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutItemsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutItemsInput, userUncheckedUpdateWithoutItemsInput>
  }

  export type userUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    role?: roleUpdateOneRequiredWithoutUsersNestedInput
    blogs?: blogUpdateManyWithoutUserNestedInput
    comments?: commentUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    blogs?: blogUncheckedUpdateManyWithoutUserNestedInput
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type itemCreateWithoutItem_imageInput = {
    id?: string
    name: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    item_category: itemCategoryCreateNestedOneWithoutItemsInput
    user: userCreateNestedOneWithoutItemsInput
  }

  export type itemUncheckedCreateWithoutItem_imageInput = {
    id?: string
    user_id: string
    name: string
    item_category_id: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemCreateOrConnectWithoutItem_imageInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutItem_imageInput, itemUncheckedCreateWithoutItem_imageInput>
  }

  export type itemUpsertWithoutItem_imageInput = {
    update: XOR<itemUpdateWithoutItem_imageInput, itemUncheckedUpdateWithoutItem_imageInput>
    create: XOR<itemCreateWithoutItem_imageInput, itemUncheckedCreateWithoutItem_imageInput>
    where?: itemWhereInput
  }

  export type itemUpdateToOneWithWhereWithoutItem_imageInput = {
    where?: itemWhereInput
    data: XOR<itemUpdateWithoutItem_imageInput, itemUncheckedUpdateWithoutItem_imageInput>
  }

  export type itemUpdateWithoutItem_imageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    item_category?: itemCategoryUpdateOneRequiredWithoutItemsNestedInput
    user?: userUpdateOneRequiredWithoutItemsNestedInput
  }

  export type itemUncheckedUpdateWithoutItem_imageInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    item_category_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemCreateWithoutItem_categoryInput = {
    id?: string
    name: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    item_image?: itemImageCreateNestedManyWithoutItemInput
    user: userCreateNestedOneWithoutItemsInput
  }

  export type itemUncheckedCreateWithoutItem_categoryInput = {
    id?: string
    user_id: string
    name: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
    item_image?: itemImageUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemCreateOrConnectWithoutItem_categoryInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutItem_categoryInput, itemUncheckedCreateWithoutItem_categoryInput>
  }

  export type itemCreateManyItem_categoryInputEnvelope = {
    data: itemCreateManyItem_categoryInput | itemCreateManyItem_categoryInput[]
    skipDuplicates?: boolean
  }

  export type itemUpsertWithWhereUniqueWithoutItem_categoryInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutItem_categoryInput, itemUncheckedUpdateWithoutItem_categoryInput>
    create: XOR<itemCreateWithoutItem_categoryInput, itemUncheckedCreateWithoutItem_categoryInput>
  }

  export type itemUpdateWithWhereUniqueWithoutItem_categoryInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutItem_categoryInput, itemUncheckedUpdateWithoutItem_categoryInput>
  }

  export type itemUpdateManyWithWhereWithoutItem_categoryInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutItem_categoryInput>
  }

  export type userCreateManyRoleInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_uri?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type userUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    items?: itemUpdateManyWithoutUserNestedInput
    blogs?: blogUpdateManyWithoutUserNestedInput
    comments?: commentUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    items?: itemUncheckedUpdateManyWithoutUserNestedInput
    blogs?: blogUncheckedUpdateManyWithoutUserNestedInput
    comments?: commentUncheckedUpdateManyWithoutUserNestedInput
    detail_seller?: detailSellerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_uri?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemCreateManyUserInput = {
    id?: string
    name: string
    item_category_id: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type blogCreateManyUserInput = {
    id?: string
    title: string
    content: string
    image_uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type commentCreateManyUserInput = {
    id?: string
    blog_id: string
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    item_image?: itemImageUpdateManyWithoutItemNestedInput
    item_category?: itemCategoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type itemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    item_category_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    item_image?: itemImageUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    item_category_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type blogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    comments?: commentUpdateManyWithoutBlogNestedInput
  }

  export type blogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    comments?: commentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type blogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type commentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    blog?: blogUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blog_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type commentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blog_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type commentCreateManyBlogInput = {
    id?: string
    user_id: string
    comment: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type commentUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type commentUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemImageCreateManyItemInput = {
    id?: string
    uri: string
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemImageUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemImageUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemImageUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type itemCreateManyItem_categoryInput = {
    id?: string
    user_id: string
    name: string
    price: number
    description: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    created_by?: string
    updated_by?: string
  }

  export type itemUpdateWithoutItem_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    item_image?: itemImageUpdateManyWithoutItemNestedInput
    user?: userUpdateOneRequiredWithoutItemsNestedInput
  }

  export type itemUncheckedUpdateWithoutItem_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    item_image?: itemImageUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateManyWithoutItem_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlogCountOutputTypeDefaultArgs instead
     */
    export type BlogCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlogCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCountOutputTypeDefaultArgs instead
     */
    export type ItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCategoryCountOutputTypeDefaultArgs instead
     */
    export type ItemCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use roleDefaultArgs instead
     */
    export type roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = roleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use detailSellerDefaultArgs instead
     */
    export type detailSellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = detailSellerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use blogDefaultArgs instead
     */
    export type blogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = blogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use commentDefaultArgs instead
     */
    export type commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = commentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use itemDefaultArgs instead
     */
    export type itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = itemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use itemImageDefaultArgs instead
     */
    export type itemImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = itemImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use itemCategoryDefaultArgs instead
     */
    export type itemCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = itemCategoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}