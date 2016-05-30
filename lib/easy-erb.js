module.exports = {
  commenter: function() {
    var editor = atom.workspace.getActiveTextEditor();
    lines = editor.getText().split(/\n+/);
    console.log("There are " + lines + " number of lines");
    var i = 0;
    lines.forEach(function(line) {
      line.forEach.prepend('<%#').append('%>');
      i++;
      console.log("Commenting line" + i );
    });
  }

};

// module.exports = {
//   tags: function() {
//     var editor = atom.workspace.getActiveTextEditor();
//     lines = editor.getText().split(/\n+/);
//     lines.forEach(function(line) {
//       line.forEach.prepend('<%#').append('%>');
//       i++;
//       console.log("Commenting line" + i );
//     });
//   }

};


// 'use babel';
//
// import EasyErbView from './easy-erb-view';
// import { CompositeDisposable } from 'atom';
//
// export default {
//
//   easyErbView: null,
//   modalPanel: null,
//   subscriptions: null,
//
//   activate(state) {
//     this.easyErbView = new EasyErbView(state.easyErbViewState);
//     this.modalPanel = atom.workspace.addModalPanel({
//       item: this.easyErbView.getElement(),
//       visible: false
//     });
//
//     // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
//     this.subscriptions = new CompositeDisposable();
//
//     // Register command that toggles this view
//     this.subscriptions.add(atom.commands.add('atom-workspace', {
//       'easy-erb:toggle': () => this.toggle()
//     }));
//   },
//
//   deactivate() {
//     this.modalPanel.destroy();
//     this.subscriptions.dispose();
//     this.easyErbView.destroy();
//   },
//
//   serialize() {
//     return {
//       easyErbViewState: this.easyErbView.serialize()
//     };
//   },
//
//   toggle() {
//     console.log('EasyErb was toggled!');
//     return (
//       this.modalPanel.isVisible() ?
//       this.modalPanel.hide() :
//       this.modalPanel.show()
//     );
//   }
//
// };
