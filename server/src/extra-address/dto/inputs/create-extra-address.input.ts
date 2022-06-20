import { Field, InputType } from '@nestjs/graphql';

@InputType({
  description: 'input for add extra address',
})
export class CreateExtraAddressInput {
  @Field(() => String)
  latitude: string;

  @Field(() => String)
  longitude: string;
}
