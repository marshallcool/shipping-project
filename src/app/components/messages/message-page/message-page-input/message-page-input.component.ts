import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  AfterContentInit
} from '@angular/core';

import * as $ from 'jquery';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-message-page-input',
  templateUrl: './message-page-input.component.html',
  styleUrls: ['./message-page-input.component.scss']
})
export class MessagePageInputComponent implements AfterViewInit, OnDestroy, AfterContentInit {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;
  public content: any;
  subscriptions: Subscription[] = [];

  constructor() { }

  ngAfterContentInit() {
    $('.material-input').on('focus', '.input-control', function (e) {
      const parent = $(this).parent('.material-input');
      parent.addClass('hovered');
    });
    $('.material-input__error').on('focus', '.input-control', function (e) {
      const parent = $(this).parent('.material-input__error');
      parent.addClass('hovered-error');
    });

    $('.material-input__error').on('blur', '.input-control', function (e) {
      if ($(this).val() === '') {
        $(this).parent('.material-input__error').removeClass('hovered-error');
      }
    });

    $('.material-input').on('blur', '.input-control', function (e) {
      if ($(this).val() === '') {
        $(this).parent('.material-input').removeClass('hovered');
      }
    });
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: [ 'link', 'paste', 'table' ],
      skin_url: './../../assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.content = content;
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  onSend() {
    console.log(this.content)
  }

}
