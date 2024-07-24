import { Module } from "@nestjs/common";
import { OrderModule } from "./order/order.module";
import { PerformerProfileModule } from "./performerProfile/performerProfile.module";
import { DeliveryContractModule } from "./deliveryContract/deliveryContract.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { UserModule } from "./user/user.module";
import { DeliveryContractModuleModule } from "./DeliveryContractModule/deliverycontractmodule.module";
import { OrderModuleModule } from "./OrderModule/ordermodule.module";
import { PerformerProfileModuleModule } from "./PerformerProfileModule/performerprofilemodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    OrderModule,
    PerformerProfileModule,
    DeliveryContractModule,
    FeedbackModule,
    UserModule,
    DeliveryContractModuleModule,
    OrderModuleModule,
    PerformerProfileModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
