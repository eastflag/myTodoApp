import { Component, OnInit } from '@angular/core';
import {NewsVO} from "../../../domain/news.vo";
import {AdminService} from "../../admin.service";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  news = new NewsVO();

  fileList: FileList;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addNews() {

  }

  fileChange(event: any) {
    this.fileList = event.target.files;
    console.log(this.fileList);
    // show thumbnail
    // html5 File API
    let reader = new FileReader();
    reader.readAsDataURL((this.fileList[0]));
    reader.onload = () => {
      // this.thumbnailSrc = reader.result;
      this.imageUpload();
    };
  }

  imageUpload() {
    let formData: FormData = new FormData();

    if (this.fileList && this.fileList.length > 0) {
      let file: File = this.fileList[0];
      formData.append('file', file, file.name);
    }

    this.adminService.imageUpload(formData)
      .then(res => {
        if (res.result === 0) {
          // 입력폼 초기화
          // this.fileList[0] = null;
          // this.fileList = null;
          // this.thumbnailSrc = null;
          // this.newFile.nativeElement.value = ""; // input type file은 readonly

          // 이미지 경로를  editor에 추가한다.
          console.log(res.value);
          if (this.news.content) {
            this.news.content += `<img src="http://www.javabrain.kr${res.value}">`;
          } else {
            this.news.content = `<img src="http://www.javabrain.kr${res.value}">`;
          }
        }
      });
  }
}
