import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'

import { SupportCallService } from './support-call.service'

import { CreateSupportCallDto } from './dto/create-support-call.dto'
import { UpdateSupportCallDto } from './dto/update-support-call.dto'

@ApiTags('Support Call')
@Controller('support-call')
export class SupportCallController {
  constructor(private readonly supportCallService: SupportCallService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The Support Call has been successfully created.',
    type: UpdateSupportCallDto,
  })
  @ApiBody({ type: CreateSupportCallDto })
  create(@Body() createSupportCallDto: CreateSupportCallDto) {
    return this.supportCallService.create(createSupportCallDto)
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all Support Calls.',
    type: [UpdateSupportCallDto],
  })
  findAll() {
    return this.supportCallService.findAll()
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID of the Support Call',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 200,
    description: 'Details of the support call.',
    type: UpdateSupportCallDto,
  })
  findOne(@Param('id') id: string) {
    return this.supportCallService.findOne(id)
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'ID of the support call',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 200,
    description: 'The support call has been successfully updated.',
    type: UpdateSupportCallDto,
  })
  @ApiBody({ type: UpdateSupportCallDto })
  update(
    @Param('id') id: string,
    @Body() updateSupportCallDto: UpdateSupportCallDto,
  ) {
    return this.supportCallService.update(id, updateSupportCallDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({
    name: 'id',
    description: 'ID of the support call',
    example: 'c467aa4d-470e-4da0-b616-65382a11cb1a',
  })
  @ApiResponse({
    status: 204,
    description: 'The support call has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.supportCallService.remove(id)
  }
}
