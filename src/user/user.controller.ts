import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  @Get('/:id')
  getUser(@Param('id') id: number) {
    return `user ${id} info`;
  }

  @Post()
  createUser(@Body() user: UserDto) {
    return user;
  }

  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() user: UserDto) {
    return `update user ${id} success!`;
  }
}
