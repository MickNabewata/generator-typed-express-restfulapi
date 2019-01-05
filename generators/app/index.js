'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

  /** ユーザー入力フェーズ */
  prompting() {
    // Yeomanジェネレーター実行時に表示されるユーザーへの挨拶
    this.log(
      yosay(`Welcome to the ultimate ${chalk.red('typed-express-restfulapi')} generator!`)
    );

    // 入力パラメータ
    const prompts = [
      // パッケージ名
      {
        name: 'userPackageName',
        message: 'What is your package name?',
        default: 'restApi'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      // パッケージ名
      this.packageName = this.props.userPackageName;
    });
  }

  /** ファイル作成フェーズ */
  writing() {
    var packageName = this.packageName;
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      { packagename: packageName }
    );
  }

  /** 依存関係の注入フェーズ */
  install() {
    /** package.jsonをテンプレートに含める方式に変更したため不要になった。 */
    // 依存関係
    //this.npmInstall(['express','helmet', 'http-errors', 'jade', 'morgan', 'serve-favicon', 'cookie-parser', 'csurf', 'debug']);
    // 依存関係(--save-dev)
    //this.npmInstall(['typescript','ts-node','chai','mocha', 'sinon', 'gulp', 'gulp-typescript', 'gulp-uglify', '@types/chai', '@types/cookie-parser', '@types/csurf', '@types/express', '@types/gulp', '@types/gulp-typescript', '@types/gulp-uglify', '@types/helmet', '@types/http-errors', '@types/mocha', '@types/morgan', '@types/node', '@types/serve-favicon', '@types/sinon', '@types/typescript'], {'save-dev':true});
  }
};
